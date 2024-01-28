import React from "react";
import paymentsData from "../../../assets/utils/paymentsData.json";
import revSvg from "../../../assets/images/svg/monetization_on.svg";
import paySvg from "../../../assets/images/svg/icons2.svg";
import senSvg from "../../../assets/images/svg/icons3.svg";
import oveSvg from "../../../assets/images/svg/compare.svg";
import revPng from "../../../assets/images/png/icon.png";
import payPng from "../../../assets/images/png/icon1.png";
import senPng from "../../../assets/images/png/icon3.png";
import ovePng from "../../../assets/images/png/icon2.png";
import arrow from "../../../assets/images/svg/arrow_forward.svg";
import arrowOutward from "../../../assets/images/svg/arrow_outward.svg";
import arrowOutward1 from "../../../assets/images/svg/arrow_outward1.svg";

const iconMapping = {
  rev: revSvg,
  pay: paySvg,
  sen: senSvg,
  ove: oveSvg,
  rev2: revPng,
  pay2: payPng,
  sen2: senPng,
  ove2: ovePng,
};

const cardsWithoutArrow = ["rev", "rev2"];

const PaymentInCards = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-4 gap-y-8 mt-8">
      {paymentsData.cards.map((card, index) => (
        <div
          key={index}
          className="px-6 py-4 rounded-lg border border-solid border-[#D4D9D9] flex flex-col items-start justify-center gap-2 flex-shrink-0 flex-grow"
        >
          <div className="flex justify-between items-center self-stretch gap-1">
            <div className="flex items-center self-stretch gap-1">
              <img src={iconMapping[card.icon]} alt={card.label} />
              <h3
                className={`${
                  card.icon === "rev"
                    ? "text-[#748684] text-base font-medium"
                    : card.icon === "pay"
                    ? "text-[#0C7C10] text-base font-medium"
                    : card.icon === "sen"
                    ? "text-[#0C417C] text-base font-medium"
                    : card.icon === "ove"
                    ? "text-[#7C0C14] text-base font-medium"
                    : "text-[#748684] text-base font-normal"
                }`}
              >
                {card.label}
              </h3>
            </div>
            {!cardsWithoutArrow.includes(card.icon) && (
              <img src={arrow} className="cursor-pointer" alt="arrow" />
            )}
          </div>
          <p className="text-[#012320] font-medium text-[28px]">
            ₦{card.values[0].toLocaleString()}
          </p>
          {card.gain !== "" ? (
            <div className="flex items-center gap-1">
              <img
                src={arrowOutward}
                alt="gain"
                className="text-[#0C7C10] text-[14px] font-normal"
              />{" "}
              <span className="text-[#0C7C10] text-[14px] font-normal">
                {card.gain.split(" ")[0]}
              </span>
              <span className="text-[#748684] text-[14px] font-normal">
                {card.gain.split(" ").slice(1).join(" ")}
              </span>
            </div>
          ) : (
            <div className="flex items-center gap-1">
              <img src={arrowOutward1} alt="loss" />
              <span className="text-[#7C0C14] text-[14px] font-normal">
                {card.loss.split(" ")[0]}
              </span>
              <span className="text-[#748684] text-[14px] font-normal">
                {card.loss.split(" ").slice(1).join(" ")}
              </span>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default PaymentInCards;
