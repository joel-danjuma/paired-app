import React from "react";
import RoomAdFormButton from "@/app/dashboard/ui/createAdFormButton";
// import { createRoomAd } from "../../../../../../actions/actions"

const inputs = [
  {
    label: "Property title",
    name: "title",
    type: "text",
    placeholder: "No of Bedroom Apartment for rent in location",
  },
  {
    label: " Email",
    name: "email",
    type: "email",
    placeholder: "email@example.com",
  },
  {
    label: "Property Type",
    name: "propertyType",
    type: "text",
    placeholder: "Apartment/ House",
  },
  {
    label: "Rent",
    name: "rent",
    type: "number",
    placeholder: "Annual Rent",
  },
  {
    label: "Bedrooms",
    name: "bedrooms",
    type: "number",
    placeholder: "No of Bedrooms",
  },
  {
    label: "Bathrooms",
    name: "bathrooms",
    type: "number",
    placeholder: "No of Bathrooms",
  },
  {
    label: "Location",
    name: "location",
    type: "text",
    placeholder: "Location",
  },
  {
    label: "Pets",
    name: "pets",
    type: "text",
    placeholder: "True / False",
  },
  {
    label: "Smoking",
    name: "smoking",
    type: "text",
    placeholder: "True/ False",
  },
  {
    label: "Serviced",
    name: "serviced",
    type: "text",
    placeholder: "True / False",
  },
  {
    label: "Service Charge",
    name: "serviceCharge",
    type: "number",
    placeholder: "Annual Service Charge",
  },
  {
    label: "Property Description",
    name: "description",
    type: "text",
    placeholder: "Property description",
    rows: "4",
  },
];

const RoomAdForm = () => {
  return (
    <>
      <form
        // action={async (formData) => {
        //     const roomAd = await createRoomAd(formData)
        //     console.log("Created Room ad")
        // }}
        className="py-2 grid grid-flow-row lg:grid-rows-6 lg:grid-cols-2 grid-cols-1 gap-4"
      >
        {/* {inputs.map((input, i) => (
                    <div key={i}className="mt-4 space-y-4">
                        <label className="lg:col-span-1 col-span-full">
                            {input.label}
                        </label>
                        <input
                            name={input.name}
                            type={input.type}
                            placeholder={input.placeholder}
                            className="block w-full px-6 py-3 text-black bg-white border border-gray-200 appearance-none rounded-xl placeholder:text-gray-400 focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm"
                        />
                    </div>
                ))} */}
        <div className="mt-4 space-y-4">
          <label className="lg:col-span-1 col-span-full">
            {inputs[0].name}
          </label>
          <input
            name={inputs[0].name}
            type={inputs[0].type}
            placeholder={inputs[0].placeholder}
            className="block w-full px-6 py-3 text-black bg-white border border-gray-200 appearance-none rounded-xl placeholder:text-gray-400 focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm"
          />
        </div>
        <div className="mt-4 space-y-4">
          <label className="lg:col-span-1 col-span-full">
            {inputs[1].name}
          </label>
          <input
            name={inputs[1].name}
            type={inputs[1].type}
            placeholder={inputs[1].placeholder}
            className="block w-full px-6 py-3 text-black bg-white border border-gray-200 appearance-none rounded-xl placeholder:text-gray-400 focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm"
          />
        </div>
        <div className="mt-4 space-y-4">
          <label className="lg:col-span-1 col-span-full">
            {inputs[2].name}
          </label>
          <input
            name={inputs[2].name}
            type={inputs[2].type}
            placeholder={inputs[2].placeholder}
            className="block w-full px-6 py-3 text-black bg-white border border-gray-200 appearance-none rounded-xl placeholder:text-gray-400 focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm"
          />
        </div>
        <div className="mt-4 space-y-4">
          <label className="lg:col-span-1 col-span-full">
            {inputs[3].name}
          </label>
          <input
            name={inputs[3].name}
            type={inputs[3].type}
            placeholder={inputs[3].placeholder}
            className="block w-full px-6 py-3 text-black bg-white border border-gray-200 appearance-none rounded-xl placeholder:text-gray-400 focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm"
          />
        </div>
        <div className="mt-4 space-y-4">
          <label className="lg:col-span-1 col-span-full">
            {inputs[4].name}
          </label>
          <input
            name={inputs[4].name}
            type={inputs[4].type}
            placeholder={inputs[4].placeholder}
            className="block w-full px-6 py-3 text-black bg-white border border-gray-200 appearance-none rounded-xl placeholder:text-gray-400 focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm"
          />
        </div>
        <div className="mt-4 space-y-4">
          <label className="lg:col-span-1 col-span-full">
            {inputs[5].name}
          </label>
          <input
            name={inputs[5].name}
            type={inputs[5].type}
            placeholder={inputs[5].placeholder}
            className="block w-full px-6 py-3 text-black bg-white border border-gray-200 appearance-none rounded-xl placeholder:text-gray-400 focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm"
          />
        </div>

        <div className="mt-4 space-y-4">
          <label className="lg:col-span-1 col-span-full">
            {inputs[6].name}
          </label>
          <input
            name={inputs[6].name}
            type={inputs[6].type}
            placeholder={inputs[6].placeholder}
            className="block w-full px-6 py-3 text-black bg-white border border-gray-200 appearance-none rounded-xl placeholder:text-gray-400 focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm"
          />
        </div>
        <div className="mt-4 space-y-4">
          <label className="lg:col-span-1 col-span-full">
            {inputs[7].name}
          </label>
          <input
            name={inputs[7].name}
            type={inputs[7].type}
            placeholder={inputs[7].placeholder}
            className="block w-full px-6 py-3 text-black bg-white border border-gray-200 appearance-none rounded-xl placeholder:text-gray-400 focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm"
          />
        </div>
        <div className="mt-4 space-y-4">
          <label className="lg:col-span-1 col-span-full">
            {inputs[8].name}
          </label>
          <input
            name={inputs[8].name}
            type={inputs[8].type}
            placeholder={inputs[9].placeholder}
            className="block w-full px-6 py-3 text-black bg-white border border-gray-200 appearance-none rounded-xl placeholder:text-gray-400 focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm"
          />
        </div>
        <div className="mt-4 space-y-4">
          <label className="lg:col-span-1 col-span-full">
            {inputs[10].name}
          </label>
          <input
            name={inputs[10].name}
            type={inputs[10].type}
            placeholder={inputs[10].placeholder}
            className="block w-full px-6 py-3 text-black bg-white border border-gray-200 appearance-none rounded-xl placeholder:text-gray-400 focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm"
          />
        </div>
        <div className="mt-4 space-y-4">
          <label className="lg:col-span-1 col-span-full">
            {inputs[11].name}
          </label>
          <input
            name={inputs[11].name}
            type={inputs[11].type}
            placeholder={inputs[11].placeholder}
            className="block w-full px-6 py-3 text-black bg-white border border-gray-200 appearance-none rounded-xl placeholder:text-gray-400 focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm"
          />
        </div>

        <div className="col-span-full flex justify-center w-full py-8">
                    <RoomAdFormButton />
                </div>
      </form>
    </>
  );
};

export default RoomAdForm;
