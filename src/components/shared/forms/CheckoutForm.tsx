import CustomizedInput from "@/components/shared/forms/formComponents/CustomizedInput";
import MaskedInput from "react-text-mask";
import { PHONE_NUMBER_MASK } from "@/regex/regex";
import RadioButtonInput from "./formComponents/RadioButtonInput";
import { FormikProps } from "formik";
import { ValuesCheckoutFormType } from "@/components/checkout/Checkout";
import AnimatedWrapper from "../animatedWrappers/AnimatedWrapper";
import { fadeInAnimation } from "@/helpers/animation";

interface CheckoutFormProps {
  formik: FormikProps<ValuesCheckoutFormType>;
}

export default function CheckoutForm({ formik }: CheckoutFormProps) {
  return (
    <div className="flex flex-col md:flex-row gap-5">
      <AnimatedWrapper
        animation={fadeInAnimation({ y: 30, delay: 0.4 })}
        className="h-fit md:w-[calc(50%-11px)] xl:w-[349px] p-7 border border-black rounded-[8px]"
      >
        <h2 className="mb-7 xl:mb-6 text-20med leading-[123%]">
          Особисті дані
        </h2>
        <div className="flex flex-col gap-y-4">
          <CustomizedInput
            fieldName="name"
            label={"Ім’я"}
            required={true}
            placeholder={"Ім’я"}
            errors={formik.errors}
            touched={formik.touched}
          />
          <CustomizedInput
            fieldName="phone"
            as={MaskedInput}
            mask={PHONE_NUMBER_MASK}
            inputType="tel"
            label={"Номер телефону"}
            required={true}
            placeholder={"Номер телефону"}
            errors={formik.errors}
            touched={formik.touched}
          />
          <CustomizedInput
            fieldName="address"
            label={"Адреса доставки"}
            required={true}
            placeholder={"Адреса доставки"}
            errors={formik.errors}
            touched={formik.touched}
          />
        </div>
      </AnimatedWrapper>
      <AnimatedWrapper
        animation={fadeInAnimation({ y: 30, delay: 0.8 })}
        aria-labelledby="radio-group"
        className="h-fit md:w-[calc(50%-11px)] xl:w-[349px] p-7 border border-black rounded-[8px]"
      >
        <h2 id="radio-group" className="mb-7 xl:mb-6 text-20med leading-[123%]">
          Оплата
        </h2>
        <div className="flex flex-col gap-y-6">
          <RadioButtonInput
            fieldName="payment"
            label="Картою кур’єру"
            value="Картою кур’єру"
          />
          <RadioButtonInput
            fieldName="payment"
            label="Готівкою при отриманні"
            value="Готівкою при отриманні"
          />
        </div>
        <AnimatedWrapper
          animation={fadeInAnimation({ scale: 0.95, delay: 1 })}
          className="w-full h-[129px] mt-8 p-5 rounded-[6px] bg-discount"
        >
          <h3
            className="max-w-[204px] xl:max-w-[253px] px-[30px] py-[6.5px] xl:py-[3px] mx-auto text-20extra xl:text-26extra leading-[123%] text-center uppercase 
          text-transparent bg-white rounded-full"
          >
            <span className="text-transparent bg-clip-text bg-discountText">
              Знижка
            </span>
          </h3>
          <p className="max-w-[204px] xl:max-w-[253px] mt-[18px] text-white text-center text-10reg xl:text-12reg leading-[123%] mx-auto">
            Якщо ви сплачуєте готівкою при отриманні, ми даруємо знижку 10%
          </p>
        </AnimatedWrapper>
      </AnimatedWrapper>
    </div>
  );
}
