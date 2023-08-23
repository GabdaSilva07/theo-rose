
import { cn } from "@/lib/utils";

const BusinessOverview = () => {
  return (
    <div className={cn("container", "mx-auto", "flex", "flex-wrap", "py-6")}>
      <div className={cn("w-full", "md:w-1/2", "px-4", "flex", "flex-col")}>
        <div className={cn("flex", "flex-wrap")}>
          <div className={cn("w-6/12", "sm:w-4/12", "px-4")}>
            { }
          </div>
          <div className={cn("w-6/12", "sm:w-4/12", "px-4")}>
                        // Insert your second component here
          </div>
        </div>
      </div>
    </div>
  );
};


export default BusinessOverview;
