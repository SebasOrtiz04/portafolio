'use client';

import ServiceHeader from "@/components/service/ServiceHeader";
import { Container } from "@mui/material";

const ServicePage = ({ params }) => {

  const {categoryId, serviceId} = params;

  return (
    <Container>
      <ServiceHeader/>
    </Container>
  );
};

export default ServicePage;
