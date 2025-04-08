import { Dispatch, SetStateAction } from "react";
import Backdrop from "../backdrop/Backdrop";
import Modal from "../modals/Modal";

interface NotificationPopUpProps {
  isNotificationShown: boolean;
  setIsNotificationShown: Dispatch<SetStateAction<boolean>>;
}

export default function NotificationPopUp({
  isNotificationShown,
  setIsNotificationShown,
}: NotificationPopUpProps) {
  const closeNotification = () => {
    setIsNotificationShown(false);
  };

  return (
    <>
      <Modal
        isPopUpShown={isNotificationShown}
        setIsPopUpShown={setIsNotificationShown}
        className="p-10 w-[83%] tab:w-[443px] max-w-[443px]"
      >
        <div className="flex flex-col items-center gap-y-6 text-black">
          <h2
            className={`relative text-center text-20med md:text-24reg uppercase leading-[123%]`}
          >
            На жаль, щось пішло не так
          </h2>
          <p className="text-center">
            Інформація по вашому замовленню не була відправлена. Будь ласка,
            спробуйте відправити замовлення ще раз або подзвоніть нам.
          </p>
        </div>
      </Modal>
      <Backdrop isVisible={isNotificationShown} onClick={closeNotification} />
    </>
  );
}
