import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const Faqs = () => {
  return (
    <div
      className="flex flex-col mr-[150px] ml-[150px] mt-20 gap-10 mobile:ml-0  mobile:mr-0
    mobile:p-7
    "
    >
      <div>
        <h1 className="text-2xl font-bold items-center justify-center flex">
          Frequenlty Asked Question
        </h1>
        <p className="flex justify-center">
          Here are some of our FAQs. If you have any other questions you’d like
          answered please feel free to email us
        </p>
      </div>
      <div className="mr-40 ml-40 mobile:mr-0 mobile:ml-0 ">
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography>What is Bookmark?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
              eget.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography>How can i request a new browser? </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
              eget.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography>Is there a mobile app?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
              eget.
            </Typography>
          </AccordionDetails>
        </Accordion>
      </div>
      <div className="justify-center flex items-center">
        <button
          className="border-2 bg-[#5267df] hover:bg-white
             hover:border-[#5267df]
             hover:text-[#5267df] rounded-lg  text-white
            shadow-lg h-12  mt-5 justify-center flex items-center pl-10 pr-10
          "
        >
          More Info
        </button>
      </div>
    </div>
  );
};

export default Faqs;
