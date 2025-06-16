
import { GoogleGenerativeAI } from "@google/generative-ai";



export const resumeBuilder = async (req, res) => {
  try {
    const {
      fullName,
      email,
      phone,
      address,
      summary,
      education,
      experience,
      skills,
      certifications,
      linkedin,
      github,
      portfolio,
    } = req.body;

    const ai = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
    const model = ai.getGenerativeModel({ model: "gemini-1.5-flash" });

    const prompt = `
Use the following information to generate a professional resume in **LaTeX** format (classical clean design) using the **article** class. line spacing should be 1.5. Use the following information:

---
**Name**: ${fullName}  
**Email**: ${email}  
**Phone**: ${phone}  
**Address**: ${address}  
**Summary**: ${summary}  

**Education**:  
${education}  

**Experience**:  
${experience}  

**Skills**:  
${skills}  

**Certifications**:  
${certifications}  

**Links**:  
- LinkedIn: ${linkedin}  
- GitHub: ${github}  
- Portfolio: ${portfolio}  

---
Generate the full LaTeX code for this resume (no extra explanation, just the code). Use professional formatting with proper sections.
    `;

    const result = await model.generateContent(prompt);
    const response = await result.response;
    const aiText = response.text();
    const formatedLatex = aiText.replace(/\\n/g, '\n').replace(/\\\\/g, '\\'); 
    console.log("Generated LaTeX Resume:\n", formatedLatex);

    res.status(200).json({ latex: formatedLatex });
  } catch (error) {
    console.error("Error generating LaTeX resume:", error);
    res.status(500).json({ error: "Something went wrong while generating resume." });
  }
};
