import { Pizza } from "lucide-react";
import { MotionDiv, MotionH3 } from "../common/motion-wrapper";
import { SummaryViewer } from "../summaries/summary-viewer";

const DEMO_SUMMARY = `# Quick Overview
• 🎯 Quickly convert long, dense PDFs into easy-to-read summaries in seconds.
• ⏳ Saves users time by extracting only the most important information.

# Key Highlights
• 📝 Transforms lengthy PDFs into clear, actionable summaries.
• 📚 Supports various PDF types including research papers, business reports, and eBooks.
• 🔑 Easily extract key points and highlights in just a few clicks.

# Why It Matters
• 🌍 Helps people absorb critical information from long documents without spending hours reading, improving productivity and keeping users informed.

# Main Points
• 💡 Quickly capture the essence of complex documents without losing important details.
• ⏱ Saves time and boosts efficiency for people who deal with large volumes of text.
• 🎯 Perfect for those needing summarized content for presentations, reports, or academic work.

# Pro Tips
• 💼 Use this tool to review reports and research papers quickly before meetings or deadlines.
• 🔄 Try summarizing multiple PDFs at once for batch processing to maximize efficiency.
• 📰 Regularly use the tool to stay updated with long-form content in your industry.

# Key Terms to Know
• 📑 Summarization: The process of condensing a document to highlight the main points.
• 🧠 Key Insights: The essential takeaways or actionable ideas from the document.

# Bottom Line
• ⚡ Transform your PDF documents into concise summaries that help you save time, stay informed, and boost productivity.
`;

export default function DemoSection() {
    return (
        <section className="relative">
            <div className="py-12 lg:py-24 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 lg:pt-12">
                <div aria-hidden='true' className="pointer-events-none absolute inset-0 -z-10 transform-gpu overflow-hidden blur-3xl">
                    <div style={{
                        clipPath: 'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                    }}
                        className="relative left-[calc(50%+3rem)] aspect-1155/678 w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-linear-to-br from-emerald-500 via-teal-500 to-cyan-500 opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
                    />
                </div>
                <div className="flex flex-col items-center text-center space-y-4">
                    <div className="inline-flex items-center p-2 rounded-2xl bg-gray-100/80 backdrop-blur-xs border-gray-500/20 mb-4">
                        <Pizza className="w-6 h-6 text-rose-500" />
                    </div>
                    <div className="text-center mb-16">
                        <MotionH3
                         initial= {{ opacity: 0, y: 20 }}
                         whileInView= {{ opacity: 1, y: 0 }}
                         transition= {{ duration: 0.5, delay: 0.2 }}
                         className="font-bold text-3xl max-w-2xl mx-auto px-4 sm:px-6">
                            Watch how SumAI transform {' '}
                            <span className="bg-linear-to-r from-rose-500 to-rose-700 bg-clip-text text-transparent">
                                this PDF
                            </span> {' '}
                            into an easy-to-read summary!
                        </MotionH3>   
                    </div>
                    <div className="flexjustify-center items-center px-2 sm:px-4 lg:px-6">
                        <MotionDiv 
                            initial= {{ opacity: 0 }}
                            whileInView= {{ opacity: 1 }}
                            transition= {{ duration: 0.5, delay: 0.4 }}
                        >
                            <SummaryViewer summary={DEMO_SUMMARY} />
                        </MotionDiv>
                    </div>
                </div>
            </div>
        </section>
    );
}