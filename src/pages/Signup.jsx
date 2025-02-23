import Login_image2 from "../assets/Images/Login_image2.jpeg"
import Template from "../components/core/Auth/Template"

function Signup() {
  return (
    <Template
      title="Join the millions learning to code with StudyNotion for free"
      description1="Build skills for today, tomorrow, and beyond."
      description2="Education to future-proof your career."
      image={Login_image2}
      formType="signup"
    />
  )
}

export default Signup
