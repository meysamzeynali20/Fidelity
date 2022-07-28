import { Form, Information } from 'contact'

const ContactMain = () => {

  return <>
    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 my-[10%] md:my-[5%] mx-[10%]">
      <Information />
    </div>
    <div className="flex flex-col lg:flex-row gap-10 bg-neutral-100 py-[8%] md:py-[5%] lg:py-[2%] px-[10%]">
      <Form />
    </div>
  </>
};

export default ContactMain;
