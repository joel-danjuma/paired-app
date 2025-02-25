import { Card } from "@heroui/card";
import { Button } from "@heroui/button";

export default function Cta() {
  return (
    <div className="p-4 pt-8 pb-8">
      <Card className="flex lg:flex-row flex-col items-center justify-between max-w-[1440px] gap-5 light:orange_gradient dark:bg-gray-900 dark:text-white text-black pt-4 lg:flex-nowrap rounded-xl p-8">
        <div className="w-full text-center lg:text-left">
          <h2 className="md:text-xl  text-md font-medium lg:text-3xl">
            Ready to Find your next Roommate?
          </h2>
          <p className="mt-2 font-medium text-opacity-90 lg:text-xl text-md">
            Connect with Renters Accross the Nation
          </p>
        </div>
        <div className="w-full text-center lg:text-right ">
          {/* <a
                        href="https://github.com/web3templates"
                        target="_blank"
                        rel="noopener"
                        className="inline-block py-3 mx-auto text-lg font-medium text-center dark:bg-orange-50  bg-slate-200 dark:text-black text-orange-500 hover:bg-orange-200 rounded-md px-7 lg:px-10 lg:py-5 "
                    >
                        Get Started Now
                    </a> */}
          <Button size="lg">Get Started Now</Button>
        </div>
      </Card>
    </div>
  );
}
