import axios from "axios";
import { FormikHelpers } from "formik";
import { Dispatch, SetStateAction } from "react";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
import { generateOrderNumber } from "./generateOrderNumber";
import { useCartStore } from "@/store/cartStore";
import { useOrderStore } from "@/store/orderStore";
import { ValuesCheckoutFormType } from "@/components/checkout/Checkout";

export const handleSubmitForm = async <T>(
  { resetForm }: FormikHelpers<T>,
  setIsLoading: Dispatch<SetStateAction<boolean>>,
  setIsNotificationShown: Dispatch<SetStateAction<boolean>>,
  values: ValuesCheckoutFormType,
  router: AppRouterInstance
) => {
  const { clearCart, cartItems, getTotalAmount } = useCartStore.getState();
  const { clearOrderData, setOrderData } = useOrderStore.getState();

  // Очищуємо стор замовлення від попередніх даних
  clearOrderData();

  // Формуємо номер замовлення
  const orderNumber = generateOrderNumber();

  // Отримуємо загальну суму замовлення
  const totalSum = getTotalAmount();

  // Формуємо дату та час замовлення
  const now = new Date();
  const formattedDate = now.toLocaleDateString("uk-UA");
  const formattedTime = now.toLocaleTimeString("uk-UA");
  const orderDate = `${formattedDate} ${formattedTime}`;

  // Формуємо повну інформацію по замовленню
  const collectedOrderData = {
    orderDate,
    orderNumber,
    name: values.name.trim(),
    phone: values.phone.trim(),
    address: values.address.trim(),
    payment: values.payment.trim(),
    cartItems,
    totalSum,
  };

  // Записуємо дані по новому замовленню в стор
  setOrderData(collectedOrderData);

  // Формуємо список замовленних страв для телеграм
  const orderedListProducts = cartItems
    .map(
      (cartItem) =>
        `- ${cartItem.title}, ціна: ${cartItem.price} грн, кількість: ${cartItem.quantity}`
    )
    .join("\n");

  // Формуємо дані для telegram
  const data =
    `<b>Замовлення #${orderNumber}</b>\n` +
    `<b>Дата замовлення:</b> ${orderDate}\n` +
    `<b>Ім'я:</b> ${values.name.trim()}\n` +
    `<b>Телефон:</b> ${values.phone.replace(/[^\d+]/g, "")}\n` +
    `<b>Адреса:</b> ${values.address.trim()}\n` +
    `<b>Оплата:</b> ${values.payment.trim()}\n` +
    `<b>Список страв:</b>\n${orderedListProducts}\n` +
    `<b>Сума замовлення:</b> ${totalSum} грн\n`;

  try {
    setIsLoading(true);

    await axios({
      method: "post",
      url: "/api/telegram",
      data,
      headers: {
        "Content-Type": "application/json",
      },
    });

    router.push("/confirmation");

    setTimeout(() => {
      resetForm();
      clearCart();
    }, 2000);
  } catch (error) {
    setIsNotificationShown(true);
    return error;
  } finally {
    setIsLoading(false);
  }
};
