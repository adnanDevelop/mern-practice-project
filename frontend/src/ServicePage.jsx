import React from "react";
import { useAuthContext } from "./store/auth";

export const ServicePage = () => {
  const { serviceData } = useAuthContext();

  return (
    <main className="mb-[100px] container mx-auto w-full">
      <section>
        <h1 className="text-[35px] font-semibold text-black mt-2 relative inline-block before:absolute before:w-[100px] before:h-1 before:bg-purple-500 before:left-0 before:bottom-[-4px]">
          Service Page
        </h1>
      </section>

      {/* SERVICE CARD SECTION */}
      <section className="grid grid-cols-3 mt-[30px] gap-x-4 gap-y-6">
        {serviceData ? (
          serviceData.map((element, index) => {
            return (
              <div className="" key={index}>
                <div
                  className="overflow-hidden w-full h-[300px] rounded-2xl image_section bg-cover bg-center"
                  style={{ backgroundImage: `url(${element.image})` }}
                >
                  {/* <img
                    src={element.image}
                    className="object-cover w-full h-auto"
                    alt=""
                  /> */}
                </div>
                <div className="p-3 mt-3 service_card_content">
                  <h3 className="text-[20px] font-semibold">{element.name}</h3>
                  <div className="flex items-center justify-between">
                    <div className="flex">
                      <h4 className="me-2">Price:</h4>
                      <h4>{element.price}</h4>
                    </div>
                    <div className="flex">
                      <h4 className="me-2">Modules: </h4>
                      <h4>{element.hours}</h4>
                    </div>
                  </div>
                </div>
              </div>
            );
          })
        ) : (
          <p>Loading...</p>
        )}
      </section>
    </main>
  );
};
