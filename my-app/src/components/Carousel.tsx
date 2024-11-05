import { Card, CardContent } from "./ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";
import { imageUrls } from "../utils/constants";

const Carousels = () => {
  return (
    <Carousel className="max-w-screen mx-auto">
      <CarouselContent>
        {imageUrls.map((imageUrl, index) => (
          <CarouselItem key={index} className="flex justify-center">
            <div className="p-1 xl:h-[320px] xl:w-[1250px] rounded-lg lg:h-[260px] lg:w-[1000px] md:w-[750px] xs:w-[340px]">
              <Card>
                <CardContent className="flex rounded-xl">
                  <img
                    src={imageUrl}
                    alt={`carousel-item-${index + 1}`}
                    className=" w-full rounded-lg"
                  />
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
};

export default Carousels;
