"use client";
import RoomAdFormButton from "@/app/dashboard/ui/createAdFormButton";

const RoommateAdForm = () => {
  return (
    <section className="h-full pb-20">
      <form>
        <div className="mt-4 space-y-4">
          <div>
            <label className="block mb-3 text-sm font-medium text-gray-600">
              Ad Title
            </label>
            <input
              name="title"
              className="block w-full px-6 py-3 text-black bg-white border border-gray-200 appearance-none rounded-xl placeholder:text-gray-400 focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm"
              placeholder="Your name"
            />
          </div>
          <div className="col-span-1">
            <label className="block mb-3 text-sm font-medium text-gray-600">
              Age
            </label>
            <input
              name="age"
              className="block w-full px-6 py-3 text-black bg-white border border-gray-200 appearance-none rounded-xl placeholder:text-gray-400 focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm"
              placeholder="email@example.com"
              type="email"
            />
          </div>
          <div>
            <label className="block mb-3 text-sm font-medium text-gray-600">
              Gender
            </label>
            <input
              name="gender"
              className="block w-full px-6 py-3 text-black bg-white border border-gray-200 appearance-none rounded-xl placeholder:text-gray-400 focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm"
              placeholder="Your name"
            />
          </div>
          <div className="col-span-full">
            <label className="block mb-3 text-sm font-medium text-gray-600">
              Budget
            </label>
            <input
              name="budget"
              className="block w-full px-6 py-3 text-black bg-white border border-gray-200 appearance-none rounded-xl placeholder:text-gray-400 focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm"
              placeholder="Company name"
            />
          </div>
          <div className="col-span-full">
            <label className="block mb-3 text-sm font-medium text-gray-600">
              Occupation
            </label>
            <input
              name="Occupation"
              className="block w-full px-6 py-3 text-black bg-white border border-gray-200 appearance-none rounded-xl placeholder:text-gray-400 focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm"
              placeholder="email@example.com"
              autoComplete="off"
              type="email"
            />
          </div>
          <div className="col-span-full">
            <label className="block mb-3 text-sm font-medium text-gray-600">
              Location
            </label>
            <input
              name="email"
              className="block w-full px-6 py-3 text-black bg-white border border-gray-200 appearance-none rounded-xl placeholder:text-gray-400 focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm"
              placeholder="email@example.com"
              autoComplete="off"
              type="email"
            />
          </div>
          <div className="col-span-full">
            <label className="block mb-3 text-sm font-medium text-gray-600">
              Pets
            </label>
            <input
              name="pets"
              className="block w-full px-6 py-3 text-black bg-white border border-gray-200 appearance-none rounded-xl placeholder:text-gray-400 focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm"
              placeholder="email@example.com"
              autoComplete="off"
              type="email"
            />
          </div>
          <div className="col-span-full">
            <label className="block mb-3 text-sm font-medium text-gray-600">
              Smoking
            </label>
            <input
              name="smoking"
              className="block w-full px-6 py-3 text-black bg-white border border-gray-200 appearance-none rounded-xl placeholder:text-gray-400 focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm"
              placeholder="email@example.com"
              autoComplete="off"
              type="email"
            />
          </div>
          <div>
            <label className="block mb-3 text-sm font-medium text-gray-600">
              Property Description
            </label>
            <div className="mt-1">
              <textarea
                name="description"
                className="block w-full px-6 py-3 text-black bg-white border border-gray-200 appearance-none rounded-xl placeholder:text-gray-400 focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm"
                placeholder="What are you working on?"
                // rows="4"
              ></textarea>
            </div>
          </div>
          <div className="col-span-full">
            <RoomAdFormButton />
          </div>
        </div>
      </form>
    </section>
  );
};

export default RoommateAdForm;
