import React from "react";
import { motion } from "framer-motion";
import { Diagonal } from "../components/Diagonal";

const Termsconditions = () => {
  return (
    <div className="pt-16">
  
      <section className="relative bg-gradient-to-br from-primary-900 via-primary-800 to-gold-600 text-white pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <h1 className="text-5xl pt-6 md:text-6xl font-bold mb-6">
              Terms & <span className="text-gold-400">Conditions</span>
            </h1>
            <p className="text-lg text-primary-100 max-w-3xl mx-auto">
              Please read these Terms of Use carefully before accessing or using
              our platform. By using AGF Group India’s website, you agree to be
              bound by these terms and our Privacy Policy.
            </p>
          </motion.div>
        </div>
        <div className="absolute bottom-0 w-full">
          <Diagonal color="fill-primary-700" flip={true} />
        </div>
      </section>

      {/* Terms Content */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          {[
            {
              title: "1. Use of the Platform",
              text: `Welcome to “AGF Group India". This Website is owned and operated by AGF Group India.
              The Website, including all data, information, text, graphics, links and other materials
              is to be used only for the purpose of purchasing products being offered by AGF Group India
              and for attaining related information. By using this Website, you consent to these Terms of Use.`,
            },
            {
              title: "2. Account",
              text: `You are solely responsible for maintaining confidentiality of your account credentials and 
              for all activities under your account. AGF Group India shall not be liable for unauthorized access. 
              We reserve the right to suspend or terminate accounts if Terms of Use are violated.`,
            },
            {
              title: "3. Access to Website",
              text: `We aim to ensure uninterrupted access to the Website. However, access may be restricted 
              occasionally for repairs, maintenance, or introduction of new facilities without prior notice.`,
            },
            {
              title: "4. Payments",
              text: `Payments via Credit Cards, Net Banking, etc. are subject to respective bank terms and applicable laws. 
              AGF Group India shall not be responsible for any technical failures or errors in payment gateways.`,
            },
            {
              title: "5. Limited License",
              text: `AGF Group India grants you a limited, non-exclusive, non-transferable license for 
              personal and non-commercial use of the Website. Any unauthorized commercial use is prohibited.`,
            },
            {
              title: "6. Your Conduct",
              text: `You must not use the Website for unlawful purposes, fraudulent activities, transmitting 
              offensive or infringing material, or causing annoyance or disruption.`,
            },
            {
              title: "7. Intellectual Property Rights",
              text: `All content, trademarks, and intellectual property on this Website are owned by AGF Group India. 
              No rights are transferred to you through use of the Website.`,
            },
            {
              title: "8. Links and Third-Party Sites",
              text: `The Website may contain references or links to third-party sites. AGF Group India 
              is not responsible for their content or accuracy. Accessing them is at your own risk.`,
            },
            {
              title: "9. Data Encryption",
              text: `All data is encrypted with industry-standard methods requiring a unique encryption key for each customer.`,
            },
            {
              title: "10. Termination",
              text: `AGF Group India reserves the right to terminate your access without notice in case of 
              breach of these Terms. You must immediately cease use of the Website upon termination.`,
            },
            {
              title: "11. Indemnity",
              text: `You agree to indemnify AGF Group India, its employees, directors, and affiliates against 
              any claims or losses arising from your use of the Website or breach of these Terms.`,
            },
            {
              title: "12. Disclaimer",
              text: `Your use of the Website and services is at your own risk. AGF Group India disclaims all warranties 
              and is not responsible for any decisions made based on the Website’s information.`,
            },
            {
              title: "13. Governing Law and Dispute Resolution",
              text: `These Terms are governed by Indian law, subject to exclusive jurisdiction of courts in Noida. 
              Disputes shall be resolved through mutual discussion, failing which arbitration will apply.`,
            },
            {
              title: "14. Grievance Officer",
              text: `For grievances, contact: 
              Name: AGF Group India Support Team 
              Email: www.agfgroupindia.com`,
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                {item.title}
              </h3>
              <p className="text-gray-700 leading-relaxed">{item.text}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Termsconditions;
