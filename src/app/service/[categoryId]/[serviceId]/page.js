'use client';

import ServiceDetail from "@/components/service/ServiceDetail";
import ServiceHeader from "@/components/service/ServiceHeader";
import { HomeButton } from "@/components/utils/buttons";
import { GetSocialEventsById } from "@/redux/actions/SocialEventActions";
import { Container } from "@mui/material";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

const ServicePage = ({ params }) => {

  const {categoryId, serviceId} = params;

  const dispatch = useDispatch();

  const [ready, setReady] = useState(false);

  useEffect(()=>{
    setReady(true);
    return () => setReady(false);
  },[])

  useEffect(()=>{
    if(!ready) return;
    dispatch(GetSocialEventsById({categoryId,serviceId}))
  },[ready])

  return (
    <Container sx={{paddingY:20,minHeight:'80vh'}}>
      <HomeButton/>
      <ServiceHeader/>
      {/* <ServiceDetail/> */}
    </Container>
  );
};

export default ServicePage;
