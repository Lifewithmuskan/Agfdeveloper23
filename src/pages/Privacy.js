import React from "react";
import { motion } from "framer-motion";
import { Diagonal } from "../components/Diagonal";

const Privacypolicy = () => {
  const sections = [
    {
      title: "1. Collection of Data / Processing of Data",
      content: (
        <>
          <p className="text-gray-600 mb-4">
            This Privacy Policy outlines AGF Group India’s approach to data
            protection and privacy to fulfil its obligations under applicable
            laws and regulations and shall be read in conjunction with our Terms
            of Use document. This Privacy Policy applies to your data processed
            by us through the means of “AGF Group India”. Our Privacy Policy is
            subject to change at any time without notice. Please review this
            policy periodically.
          </p>
          <div className="mb-4">
            <h4 className="font-semibold text-gray-800">
              Categories of data processed by us are as follows:
            </h4>
            <h5 className="mt-2 font-medium">Demography & Identity data</h5>
            <ul className="list-disc ml-6 text-gray-600">
              <li>
                Contact details such as Name, email address, contact number,
                country, date of birth
              </li>
              <li>
                Transaction details such as Bank Name, Card Type, Card number,
                amount
              </li>
            </ul>
          </div>
          <div>
            <h5 className="font-medium">Online Identifiers & Technical Data</h5>
            <ol className="list-decimal ml-6 text-gray-600">
              <li>
                Location details such as IP address, logs, and connection
                details
              </li>
              <li>
                Technical details such as device information, network carrier,
                etc.
              </li>
              <li>
                Communication metadata from emails, SMS, instant messages, and
                calls
              </li>
              <li>Usage data such as pages viewed and interactions</li>
            </ol>
            <p className="mt-4 text-gray-600">
              By using our Website, you give unconditional consent to collection
              and processing of your data for purposes of transacting sales.
              AGF Group India may disclose your data where required by law.
            </p>
          </div>
        </>
      ),
    },
    {
      title: "2. Cookies and Other Trackers",
      content: (
        <p className="text-gray-600">
          Our websites use cookies, permissions, and SDKs to enhance efficiency,
          improve user experience, and provide better services. These tools help
          us collect and process data to personalize and optimize your online
          journey.
        </p>
      ),
    },
    {
      title: "3. Disclosure",
      content: (
        <p className="text-gray-600">
          We may disclose your data to authorities if required to comply with
          law, protect the safety of individuals, prevent fraud or technical
          issues, or to safeguard our rights and those of our users.
        </p>
      ),
    },
    {
      title: "4. Data Security",
      content: (
        <p className="text-gray-600">
          We implement appropriate physical, technical, and managerial safeguards
          to protect your data from unauthorized access, alteration, or
          deletion. Third-party service providers are contractually bound to
          maintain security standards consistent with our policies.
        </p>
      ),
    },
    {
      title: "5. Retention and Disposal of Data",
      content: (
        <p className="text-gray-600">
          We retain data only as long as necessary for business, legal, or
          regulatory reasons. Data no longer required is deleted or permanently
          de-identified with reasonable safeguards.
        </p>
      ),
    },
    {
      title: "6. Limitation of Liability and Third Parties",
      content: (
        <p className="text-gray-600">
          Our Website may contain links to third-party sites, apps, or software.
          AGF Group India is not liable for any damages arising from your use of
          such third-party resources. By using our Website, you accept this
          limitation without qualification.
        </p>
      ),
    },
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-900 via-primary-800 to-gold-600 text-white pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <h1 className="text-5xl pt-6 md:text-6xl font-bold mb-6">
              Privacy <span className="text-gold-400">Policy</span>
            </h1>
            <p className="text-lg text-primary-100 max-w-3xl mx-auto">
              At AGF Group India, we value your privacy and are committed to
              protecting your personal data while providing real estate
              solutions tailored to your needs.
            </p>
          </motion.div>
        </div>
        <div className="absolute bottom-0 w-full">
          <Diagonal color="fill-primary-700" flip={true} />
        </div>
      </section>

      {/* Policy Sections */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          {sections.map((sec, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <h3 className="text-3xl font-bold text-gray-900 mb-4 text-center">
                {sec.title}
              </h3>
              <div className="text-left">{sec.content}</div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Privacypolicy;
