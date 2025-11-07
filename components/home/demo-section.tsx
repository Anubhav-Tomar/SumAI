import { Pizza } from "lucide-react";
import { MotionDiv, MotionH3 } from "../common/motion-wrapper";
import { SummaryViewer } from "../summaries/summary-viewer";

const DEMO_SUMMARY = `# Quick Overview
• 🎯 Instantly analyze news articles and online content to detect misinformation.
• ⏳ Saves users time by flagging untrustworthy sources and highlighting factual inconsistencies.

# Key Highlights
• 🧠 Uses AI to identify fake news, misinformation, and biased reporting.
• 🌐 Works across various content types including news websites, blogs, and social media posts.
• ✅ Provides credibility scores and evidence-backed verification in just a few clicks.

# Why It Matters
• 🌍 Helps users stay accurately informed in a world flooded with misinformation.
• 🛡 Protects against manipulation, clickbait, and misleading headlines by providing trustworthy insights.

# Main Points
• 🔎 Automatically assess the reliability of any article or news source.
• 📉 Reduces time spent fact-checking by delivering instant credibility analysis.
• 📢 Ideal for journalists, researchers, educators, and anyone who values truth in media.

# Pro Tips
• 📥 Use the tool before sharing articles to avoid spreading misinformation.
• 👥 Great for group discussions, classrooms, or editorial teams to assess news validity together.
• 📲 Install the browser extension for real-time detection while browsing the web.

# Key Terms to Know
• 📰 Fake News: False or misleading information presented as legitimate news.
• 🤖 AI Detection: The use of artificial intelligence to analyze patterns, sources, and content for truthfulness.
• 📊 Credibility Score: A rating that indicates how trustworthy a piece of content or its source is.

# Bottom Line
• ⚡ Empower yourself with the tools to detect fake news, protect your information space, and promote informed decision-making—fast, easy, and reliable.
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
                            See how TruthLens scans {' '}
                            <span className="bg-linear-to-r from-rose-500 to-rose-700 bg-clip-text text-transparent">
                                this news piece
                            </span> {' '}
                            and delivers a clear, verified report!
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