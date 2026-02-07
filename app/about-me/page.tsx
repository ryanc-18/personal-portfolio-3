import PageLayout from "@/components/PageLayout"

export default function AboutMe() {
  return (
    <PageLayout>
      <div className="fixed bottom-4 right-4 p-4">
        <div className="relative">
            <h1 className="text-9xl font-bold text-black">WHO IS RYAN?</h1>

            <span 
            className="question-mark text-[10rem] text-black font-bold"
            style={{ top: '-220px', left: '30px', rotate: '-20deg' }}
            >
            ?
            </span>
            <span 
            className="question-mark text-[16rem] text-black font-bold"
            style={{ top: '-300px', left: '200px', rotate: '10deg', animationDelay: '1.2s' }}
            >
            ?
            </span>
            <span 
            className="question-mark text-[10rem] text-black font-bold"
            style={{ top: '-220px', left: '400px', rotate: '-10deg', animationDelay: '2.5s' }}
            >
            ?
            </span>
            <span 
            className="question-mark text-[16rem] text-black font-bold"
            style={{ top: '-300px', left: '600px', rotate: '20deg', animationDelay: '1.8s' }}
            >
            ?
            </span>
        </div>
        
      </div>
    </PageLayout>
  );
}
