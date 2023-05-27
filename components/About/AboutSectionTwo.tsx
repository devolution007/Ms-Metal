import Image from "next/image";
import SectionTitle from "../Common/SectionTitle";
const AboutSectionTwo = () => {
  return (
    
    <section className="py-16 md:py-20 lg:py-28">
      <div className="container">
      
          <div className="-mx-4 flex flex-wrap items-center">
          <div className="w-full px-4 lg:w-1/2">
            <div
              className="wow fadeInUp relative mx-auto mb-12 aspect-[25/24] max-w-[500px] text-center lg:m-0"
              data-wow-delay=".15s"
            >
              <Image
                src="/images/about/about-image-2.svg"
                alt="about image"
                fill
              />
            </div>
          </div>
          <div className="w-full px-4 lg:w-1/2">
            <div className="wow fadeInUp max-w-[470px]" data-wow-delay=".2s">
              <div className="mb-9">
                <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                Moto of the Company
                </h3>
                <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                  Building Strength, Forging Excellence
                </p>
              </div>
              <div className="mb-9">
                <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                Vision of the Company
                </h3>
                <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                Our vision is to be the premier construction partner, specializing in structural and
miscellaneous metals. We aim to set the standard for excellence in our industry by delivering innovative, reliable, and cost-effective solutions that meet our clients evolving needs. With a focus on safety, quality, and sustainability, we strive to build lasting relationships with our clients, suppliers, and employees, and to play an instrumental role in shaping the future of construction.
                </p>
              </div>
              
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSectionTwo;
