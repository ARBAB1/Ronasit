import React from "react";
import styles from "./why.module.css";

const index = () => {
  return (
    <div className={`container ${styles.container}`}>
    <div className={`grid grid-cols-12 gap-4 ${styles.subContainer}`}>
        <div className={`col-span-12`}>
          <h1>Why choose us?</h1>
        </div>
    </div>
      <div className={`grid grid-cols-12 gap-4 ${styles.sub2Container}`}>
        <div className={`col-span-3 ${styles.Commonds}`}>
          <h1 className={`animate__animated animate__fadeInUp`}>Quick access to development</h1>
          <p>Our designers collaborate closely with the development team to create designs that are both practically feasible and cost-effective. This teamwork leads to a faster layout process and enhances the efficiency of our UI/UX design services. With a large team of developers, we can quickly access expertise in backend, frontend, and mobile engineering. This ensures that our designers and developers produce user interfaces that function effectively now and prevent future problems, resulting in an improved user experience. And, of course, we can also develop your product, not just design it.</p>
        </div>
        <div className={`col-span-3 ${styles.Commonds}`}>
          <h1 className={`animate__animated animate__fadeInUp`}>Double-checking the quality</h1>
          <p>We understand the importance of detail and aim to reduce the need for you to micromanage every stage. To ensure quality, we employ cross-reviews within our team. This means that responsibility for the user interface and user experience design quality is shared, not just placed on a single designer. Each design is reviewed by other designers and overseen by an art director. A comprehensive checklist is also utilized to ensure all aspects of the project are given due attention.</p>
        </div>
        <div className={`col-span-3 ${styles.Commonds}`}>
          <h1 className={`animate__animated animate__fadeInUp`}>Elaborated design system</h1>
          <p>In order to craft scalable interfaces and logical user experiences, we have developed our own comprehensive design system. This system encompasses component templates, a typekit, a palette system, tips for prototyping, mockup and artboard systematization, procedures for preparing elements for export, and more. These tools facilitate easier and quicker project customization. Adherence to our design system allows us to streamline our workflow, ensuring timely and delay-free project completions.</p>
        </div>
        <div className={`col-span-3 ${styles.Commonds}`}>
          <h1 className={`animate__animated animate__fadeInUp`}>Keeping up with trends</h1>
          <p>We are committed to the continuous education of our designers and fostering a knowledge-sharing corporate culture. Thus, even if your project is handled by one or two designers, you benefit from our entire team's expertise. Regular meetings are held to keep up with current trends, and an active group chat is maintained for updates and discussions on professional literature. In essence, we do everything to maintain a competitive edge.</p>
        </div>
      </div>
    </div>
  );
};

export default index;
