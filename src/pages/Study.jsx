import { useState } from "react";

import Sidebar from "../components/Sidebar";
import UploadBox from "../components/study/UploadBox";
import StudyFeatureCard from "../components/study/StudyFeatureCard";
import AIOutput from "../components/study/AIOutput";

import { extractTextFromPDF } from "../utils/pdfExtractor";
import { generateContent } from "../services/gemini";

import {
  FileText,
  BookOpen,
  ClipboardList,
  Mic,
} from "lucide-react";

function Study() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [output, setOutput] = useState("");

  // Save uploaded PDF
  const handleFileSelect = (file) => {
    setSelectedFile(file);

    const saved =
      JSON.parse(localStorage.getItem("lifeos_pdfs")) || [];

    // Prevent duplicate entries
    const exists = saved.some(
      (item) => item.name === file.name
    );

    if (!exists) {
      saved.push({
        name: file.name,
        uploadedAt: new Date().toLocaleString(),
      });

      localStorage.setItem(
        "lifeos_pdfs",
        JSON.stringify(saved)
      );
    }
  };

  const handleGenerate = async (type) => {
    if (!selectedFile) {
      alert("Please upload a PDF first!");
      return;
    }

    try {
      setLoading(true);
      setOutput("");

      const text = await extractTextFromPDF(selectedFile);

      let prompt = "";

      switch (type) {
        case "summary":
          prompt = `Summarize this in simple bullet points:\n\n${text}`;
          break;

        case "flashcards":
          prompt = `Create flashcards from this content:\n\n${text}`;
          break;

        case "quiz":
          prompt = `Create MCQ quiz questions with answers:\n\n${text}`;
          break;

        case "viva":
          prompt = `Generate viva/interview questions with answers:\n\n${text}`;
          break;

        default:
          prompt = text;
      }

      const result = await generateContent(prompt);

      setOutput(result);

    } catch (error) {
      console.error(error);
      setOutput("Error generating AI response.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex bg-[#FFF7FB] min-h-screen">

      <Sidebar />

      <main className="flex-1 p-10 overflow-y-auto">

        {/* Header */}

        <div>

          <h1 className="text-4xl font-bold">
            📚 AI Study Assistant
          </h1>

          <p className="text-gray-500 mt-2">
            Upload PDF and generate AI-powered learning tools instantly.
          </p>

        </div>

        {/* Upload */}

        <div className="mt-10">

          <UploadBox
            onFileSelect={handleFileSelect}
          />

        </div>

        {/* Features */}

        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6 mt-10">

          <StudyFeatureCard
            icon={FileText}
            title="AI Summary"
            desc="Quick revision notes"
            onClick={() => handleGenerate("summary")}
          />

          <StudyFeatureCard
            icon={BookOpen}
            title="Flashcards"
            desc="Smart revision cards"
            onClick={() => handleGenerate("flashcards")}
          />

          <StudyFeatureCard
            icon={ClipboardList}
            title="Quiz"
            desc="Test your knowledge"
            onClick={() => handleGenerate("quiz")}
          />

          <StudyFeatureCard
            icon={Mic}
            title="Viva"
            desc="Interview preparation"
            onClick={() => handleGenerate("viva")}
          />

        </div>

        {/* AI Output */}

        <div className="mt-10">

          <AIOutput
            output={output}
            loading={loading}
          />

        </div>

      </main>

    </div>
  );
}

export default Study;