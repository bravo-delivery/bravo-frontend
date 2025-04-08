"use client";
import { useState } from "react";
import { Form, Formik, FormikHelpers } from "formik";
import { checkoutValidation } from "@/schemas/checkoutFormValidation";
import OrderInfo from "./OrderInfo";
import CheckoutForm from "../shared/forms/CheckoutForm";
import SubmitButton from "../shared/forms/formComponents/SubmitButton";
import { useRouter } from "next/navigation";
import { handleSubmitForm } from "@/utils/handleSubmitForm";
import NotificationPopUp from "../shared/pop-ups/NotificationPopUp";
import AnimatedWrapper from "../shared/animatedWrappers/AnimatedWrapper";
import { fadeInAnimation } from "@/helpers/animation";

export interface ValuesCheckoutFormType {
  name: string;
  phone: string;
  address: string;
  payment: string;
}

const initialValues: ValuesCheckoutFormType = {
  name: "",
  phone: "",
  address: "",
  payment: "Готівкою при отриманні",
};

export default function Checkout() {
  const [isLoading, setIsLoading] = useState(false);
  const [isNotificationShown, setIsNotificationShown] = useState(false);

  const router = useRouter();

  const validationSchema = checkoutValidation();

  const submitForm = async (
    values: ValuesCheckoutFormType,
    formikHelpers: FormikHelpers<ValuesCheckoutFormType>
  ) => {
    await handleSubmitForm<ValuesCheckoutFormType>(
      formikHelpers,
      setIsLoading,
      setIsNotificationShown,
      values,
      router
    );
  };

  return (
    <section className="overflow-hidden">
      <div className="container xl:max-w-[1280px] pt-[108px] xl:pt-[136px] pb-[120px] xl:pb-[120px]">
        <AnimatedWrapper
          as="h1"
          animation={fadeInAnimation({ y: 30 })}
          className="mb-10 xl:mr-2 text-24semi xl:text-36semi leading-[123%]"
        >
          Оформлення замовлення
        </AnimatedWrapper>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={submitForm}
        >
          {(formik) => (
            <Form className="flex flex-col xl:flex-row gap-y-10 xl:gap-x-5 max-w-[440px] md:max-w-full mx-auto">
              <CheckoutForm formik={formik} />
              <AnimatedWrapper
                animation={fadeInAnimation({ y: 30, delay: 1.2 })}
                className="xl:w-[402px] xl:py-7 xl:pl-7 xl:pr-5 xl:border xl:border-black xl:rounded-[8px]"
              >
                <OrderInfo />
                <SubmitButton
                  onClick={formik.submitForm}
                  dirty={formik.dirty}
                  isValid={formik.isValid}
                  isLoading={isLoading}
                  className="py-[15px] w-full max-w-[346px] mx-auto xl:mr-2 text-14med"
                >
                  Оформити замовлення
                </SubmitButton>
              </AnimatedWrapper>
            </Form>
          )}
        </Formik>
      </div>
      <NotificationPopUp
        isNotificationShown={isNotificationShown}
        setIsNotificationShown={setIsNotificationShown}
      />
    </section>
  );
}
