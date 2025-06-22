import { useFormik } from "formik";
import * as Yup from "yup";
import { CallToActionData } from "../../data/data";
import { motion } from "framer-motion";

interface CallToActionValues {
  name: string;
  email: string;
  selectDoctors: string;
  appointmentdate: string;
  subject: string;
  message: string;
}

const CallToAction = () => {
  const formik = useFormik<CallToActionValues>({
    initialValues: {
      name: "",
      email: "",
      selectDoctors: "",
      appointmentdate: "",
      subject: "",
      message: "",
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .required("Sorry, The email is required")
        .email("This is an invalid email format"),
      name: Yup.string().required("This field is required"),
    }),
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <section className="py-20 bg-white" id="contact">
      {/* Heading Text */}
      {CallToActionData.map((item, index) => (
        <div key={index} className="text-center max-w-2xl mx-auto px-4 mb-12">
          <motion.h5
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="font-raleway text-[#00ADB5] text-lg font-semibold mb-2"
          >
            {item.subHeading}
          </motion.h5>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="font-raleway text-3xl md:text-4xl font-extrabold text-gray-800 mb-4"
          >
            {item.mainHeading}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-gray-500"
          >
            {item.description}
          </motion.p>
        </div>
      ))}

      {/* Form Section */}
      <div className="max-w-6xl mx-auto px-4">
        <form
          onSubmit={formik.handleSubmit}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          <input
            type="text"
            placeholder="Name"
            {...formik.getFieldProps("name")}
            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#00ADB5] transition"
          />

          <input
            type="email"
            placeholder="Email"
            {...formik.getFieldProps("email")}
            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#00ADB5] transition"
          />

          <select
            {...formik.getFieldProps("selectDoctors")}
            className="w-full px-4 py-3 border border-gray-300 rounded-md bg-white focus:outline-none focus:ring-2 focus:ring-[#00ADB5] transition"
          >
            <option value="">Select Doctor</option>
            <option value="Dr. Smith">Dr. Smith</option>
            <option value="Dr. Johnson">Dr. Johnson</option>
            <option value="Dr. Emily">Dr. Emily</option>
          </select>

          <input
            type="date"
            {...formik.getFieldProps("appointmentdate")}
            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#00ADB5] transition"
          />

          <input
            type="text"
            placeholder="Subject"
            {...formik.getFieldProps("subject")}
            className="w-full md:col-span-2 px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#00ADB5] transition"
          />

          <textarea
            rows={5}
            placeholder="Message"
            {...formik.getFieldProps("message")}
            className="w-full md:col-span-2 px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#00ADB5] transition"
          ></textarea>

          <button
            type="submit"
            className="md:col-span-2 bg-[#00ADB5] hover:bg-[#009ba0] text-white font-semibold py-3 px-6 rounded-md transition duration-300"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default CallToAction;
