import React, { useEffect, useState } from "react";
import BannerInner from "../../components/banner-inner/banner-inner.component";
import "./individual-service.styles.scss";
import { useParams } from "react-router";
import {
  distribution,
  makeUrl,
  other,
  transmission,
} from "../../utils/imagesDb";
import Slider from "../../components/slider/slider";

const IndividualService = () => {
  const { categoryId, serviceId } = useParams();
  const [service, setService] = useState("");
  const [classs, setClasss] = useState("");
  const [category, setCategory] = useState({});

  useEffect(() => {
    let tempService = "";
    if (categoryId === "distribution") {
      setCategory({ content: distribution, type: "distribution" });

      tempService = distribution.find((x) => makeUrl(x.heading) === serviceId);
    } else if (categoryId === "transmission") {
      setCategory({ content: transmission, type: "transmission" });
      setClasss("");
      tempService = transmission.find((x) => makeUrl(x.heading) === serviceId);
    } else {
      setCategory({ content: other, type: "other" });
      tempService = other.find((x) => makeUrl(x.heading) === serviceId);
    }

    setService(tempService);
  }, [categoryId, serviceId]);
  return (
    <div className="individual-service-component">
      <BannerInner index={5} breadcrumb={category.type} />
      <div className="service-container">
        <div className={`service-header ${classs}`}>
          <div className={`service-image ${classs}`}>
            <img src={service.image} alt="" />
            <h4 className={`service-heading ${classs}`}> {service.heading}</h4>
          </div>
        </div>
        <div className="service-content">{service.description}</div>
      </div>
      {category && category.content && (
        <Slider
          other={category.type}
          services={category.content.filter((x) => x.heading)}
        />
      )}
    </div>
  );
};

export default IndividualService;
