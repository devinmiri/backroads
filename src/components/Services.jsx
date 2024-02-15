import { services } from "../data";
import Service from "./Service";

const Services = () => {
  return (
    <section className="section services" id="services">
      <div className="section-title">
        <h2>
          our <span>services</span>
        </h2>
      </div>
      <div className="section-center services-center">
        {services.map((service) => (
          <Service key={service.id} service={{ ...service }} />
        ))}
      </div>
    </section>
  );
};
export default Services;
