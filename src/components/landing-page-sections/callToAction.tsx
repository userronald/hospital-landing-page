import { useFormik } from "formik";
import * as Yup from "yup";


interface CallToActionValues{
    name:string;
    email:string;
    selectDoctors:string;
    appointmentdate:string;
    subject:string;
    message:string;

}

const CallToAction = ()=>{

    const formik=useFormik<CallToActionValues>({
        initialValues:{
            name:"",
            email:"",
            selectDoctors:"",
            appointmentdate:"",
            subject:"",
            message:"",
        },
        validationSchema:Yup.object({
            email:Yup.string()
            .required("Sorry, The email is required")
            .email("This is an invalid email format"),

            name:Yup.string()
            .required("This field is required"),
        }),
        onSubmit:(values)=>{
            console.log(values)
        }
    })

    return (
      <>
        <div className="flex justify-center items-center min-h-screen ">
          <div className="container mx-auto max-w-lg bg-white p-6 rounded shadow-lg">
            <form
              onSubmit={formik.handleSubmit}
              className="grid grid-cols-1 md:grid-cols-2 gap-4"
            >
              <input
                type="text"
                placeholder="Name"
                {...formik.getFieldProps("name")}
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
              />

              <input
                type="email"
                placeholder="Email"
                {...formik.getFieldProps("email")}
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
              />

              <select
                {...formik.getFieldProps("selectDoctors")}
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
              >
                <option value="">Select Doctor</option>
                <option value="Dr. Smith">Dr. Smith</option>
                <option value="Dr. Johnson">Dr. Johnson</option>
                <option value="Dr. Emily">Dr. Emily</option>
              </select>

              <input
                type="date"
                placeholder="Appointment Date"
                {...formik.getFieldProps("appointmentdate")}
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
              />

              <input
                type="text"
                placeholder="Subject"
                {...formik.getFieldProps("subject")}
                className="w-full md:col-span-2 px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
              />

              <textarea
                rows={5}
                placeholder="Message"
                {...formik.getFieldProps("message")}
                className="w-full md:col-span-2 px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
              ></textarea>

              <button
                type="submit"
                className="md:col-span-2 bg-teal-500 hover:bg-teal-600 text-white font-semibold py-3 px-6 rounded-md transition-all duration-300"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </>
    );

}

export default CallToAction;