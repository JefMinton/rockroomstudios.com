import { useState } from 'react';
import { Play, Pause, Download, Clock, Mic, Film, ChevronDown, ChevronUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';

// Import generated videos
import heroVideo from '@/assets/rockfu-hero-video.mp4';
import guitarScene from '@/assets/rockfu-guitar-scene.mp4';
import bandScene from '@/assets/rockfu-band-scene.mp4';
import finaleScene from '@/assets/rockfu-finale-scene.mp4';

// Import brand assets
import rockfuLogo from '@/assets/rockfu-hero-logo.png';

interface SceneData {
  id: number;
  title: string;
  duration: string;
  timecode: string;
  video: string;
  voiceover: string;
  graphics: string[];
  notes: string;
}

const scenes: SceneData[] = [
  {
    id: 1,
    title: "Opening Hook",
    duration: "0-5s",
    timecode: "00:00 - 00:05",
    video: heroVideo,
    voiceover: "What if your kid could ROCK... for real?",
    graphics: ["Rock Fu Logo Reveal", "Underground Live venue shot"],
    notes: "Start with dramatic fade-in. Logo appears with electric guitar riff."
  },
  {
    id: 2,
    title: "The Problem",
    duration: "5-10s",
    timecode: "00:05 - 00:10",
    video: guitarScene,
    voiceover: "Forget boring lessons. Forget playing alone.",
    graphics: ["Quick cuts of traditional lessons (crossed out)", "Transition to band environment"],
    notes: "Quick cuts showing contrast. Use dynamic camera movement."
  },
  {
    id: 3,
    title: "The Solution",
    duration: "10-20s",
    timecode: "00:10 - 00:20",
    video: bandScene,
    voiceover: "At Rock Fu, students don't just learn music—they BECOME rock stars. Real bands. Real songs. Real stage.",
    graphics: ["Band rehearsal footage", "Student testimonials overlay", "Rock Fu program highlights"],
    notes: "Showcase the energy of group learning. Include shots of Jef directing."
  },
  {
    id: 4,
    title: "Call to Action",
    duration: "20-30s",
    timecode: "00:20 - 00:30",
    video: finaleScene,
    voiceover: "Rock Fu at The Underground Live. Enroll now at rockfu.org",
    graphics: ["Rock Fu Logo", "Website URL", "Contact info", "Underground Live venue"],
    notes: "End on high energy. Final performance shot with crowd cheering."
  }
];

const fullScript = `[OPENING - 0-5 seconds]
(Dramatic fade-in, electric guitar riff)
VO (Jef Minton): "What if your kid could ROCK... for real?"

[THE PROBLEM - 5-10 seconds]
(Quick cuts, traditional lessons crossed out)
VO: "Forget boring lessons. Forget playing alone."

[THE SOLUTION - 10-20 seconds]
(Band rehearsal, student energy, program highlights)
VO: "At Rock Fu, students don't just learn music—they BECOME rock stars. Real bands. Real songs. Real stage."

[CALL TO ACTION - 20-30 seconds]
(Final performance, crowd energy, logo reveal)
VO: "Rock Fu at The Underground Live. Enroll now at rockfu.org"

[END CARD]
ROCK FU @ THE UNDERGROUND LIVE
rockfu.org | (770) 285-8430`;

export default function CommercialStoryboard() {
  const [playingVideo, setPlayingVideo] = useState<number | null>(null);
  const [expandedScene, setExpandedScene] = useState<number | null>(1);
  const [showFullScript, setShowFullScript] = useState(false);

  const handleVideoPlay = (sceneId: number) => {
    setPlayingVideo(playingVideo === sceneId ? null : sceneId);
  };

  const handleDownload = (videoUrl: string, filename: string) => {
    const link = document.createElement('a');
    link.href = videoUrl;
    link.download = filename;
    link.click();
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-card border-b border-border">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <img src={rockfuLogo} alt="Rock Fu Logo" className="h-12 w-auto" />
              <div>
                <h1 className="text-2xl font-bold text-foreground">Commercial Storyboard</h1>
                <p className="text-muted-foreground">Rock Fu @ The Underground Live - 30 Second Spot</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Badge variant="outline" className="flex items-center gap-1">
                <Clock className="h-3 w-3" />
                30 seconds
              </Badge>
              <Badge variant="outline" className="flex items-center gap-1">
                <Film className="h-3 w-3" />
                4 scenes
              </Badge>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        {/* Full Script Section */}
        <Card className="mb-8">
          <Collapsible open={showFullScript} onOpenChange={setShowFullScript}>
            <CollapsibleTrigger asChild>
              <CardHeader className="cursor-pointer hover:bg-muted/50 transition-colors">
                <div className="flex items-center justify-between">
                  <CardTitle className="flex items-center gap-2">
                    <Mic className="h-5 w-5 text-primary" />
                    Complete Voiceover Script
                  </CardTitle>
                  {showFullScript ? <ChevronUp className="h-5 w-5" /> : <ChevronDown className="h-5 w-5" />}
                </div>
              </CardHeader>
            </CollapsibleTrigger>
            <CollapsibleContent>
              <CardContent>
                <pre className="whitespace-pre-wrap font-mono text-sm bg-muted p-4 rounded-lg">
                  {fullScript}
                </pre>
                <div className="mt-4 p-4 bg-primary/10 rounded-lg">
                  <h4 className="font-semibold text-foreground mb-2">Recording Instructions:</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Voice: Confident, energetic, rock-and-roll attitude</li>
                    <li>• Pace: Dynamic, building energy throughout</li>
                    <li>• Emphasis: "ROCK", "BECOME rock stars", "Real bands. Real songs. Real stage."</li>
                    <li>• Total duration: ~25 seconds of spoken content</li>
                  </ul>
                </div>
              </CardContent>
            </CollapsibleContent>
          </Collapsible>
        </Card>

        {/* Scene-by-Scene Breakdown */}
        <div className="space-y-6">
          <h2 className="text-xl font-bold text-foreground">Scene Breakdown</h2>
          
          {scenes.map((scene) => (
            <Card key={scene.id} className="overflow-hidden">
              <Collapsible 
                open={expandedScene === scene.id} 
                onOpenChange={() => setExpandedScene(expandedScene === scene.id ? null : scene.id)}
              >
                <CollapsibleTrigger asChild>
                  <CardHeader className="cursor-pointer hover:bg-muted/50 transition-colors">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold">
                          {scene.id}
                        </div>
                        <div>
                          <CardTitle className="text-lg">{scene.title}</CardTitle>
                          <p className="text-sm text-muted-foreground">{scene.timecode}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <Badge>{scene.duration}</Badge>
                        {expandedScene === scene.id ? <ChevronUp className="h-5 w-5" /> : <ChevronDown className="h-5 w-5" />}
                      </div>
                    </div>
                  </CardHeader>
                </CollapsibleTrigger>
                <CollapsibleContent>
                  <CardContent className="pt-0">
                    <div className="grid md:grid-cols-2 gap-6">
                      {/* Video Preview */}
                      <div className="space-y-3">
                        <h4 className="font-semibold text-foreground">Video Clip</h4>
                        <div className="relative aspect-video bg-black rounded-lg overflow-hidden">
                          <video 
                            src={scene.video}
                            className="w-full h-full object-cover"
                            loop
                            muted
                            playsInline
                            autoPlay={playingVideo === scene.id}
                            onPlay={() => setPlayingVideo(scene.id)}
                            onPause={() => setPlayingVideo(null)}
                          />
                          <div className="absolute inset-0 flex items-center justify-center">
                            <Button
                              variant="secondary"
                              size="icon"
                              className="h-12 w-12 rounded-full bg-background/80 hover:bg-background"
                              onClick={() => {
                                const video = document.querySelector(`video[src="${scene.video}"]`) as HTMLVideoElement;
                                if (video) {
                                  if (video.paused) {
                                    video.play();
                                  } else {
                                    video.pause();
                                  }
                                }
                              }}
                            >
                              {playingVideo === scene.id ? (
                                <Pause className="h-6 w-6" />
                              ) : (
                                <Play className="h-6 w-6" />
                              )}
                            </Button>
                          </div>
                        </div>
                        <Button 
                          variant="outline" 
                          size="sm"
                          className="w-full"
                          onClick={() => handleDownload(scene.video, `rockfu-scene-${scene.id}.mp4`)}
                        >
                          <Download className="h-4 w-4 mr-2" />
                          Download Clip
                        </Button>
                      </div>

                      {/* Scene Details */}
                      <div className="space-y-4">
                        <div>
                          <h4 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                            <Mic className="h-4 w-4 text-primary" />
                            Voiceover
                          </h4>
                          <p className="text-muted-foreground italic bg-muted p-3 rounded-lg">
                            "{scene.voiceover}"
                          </p>
                        </div>

                        <div>
                          <h4 className="font-semibold text-foreground mb-2">Graphics & Overlays</h4>
                          <ul className="space-y-1">
                            {scene.graphics.map((graphic, idx) => (
                              <li key={idx} className="text-sm text-muted-foreground flex items-center gap-2">
                                <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                                {graphic}
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div>
                          <h4 className="font-semibold text-foreground mb-2">Director's Notes</h4>
                          <p className="text-sm text-muted-foreground bg-primary/5 p-3 rounded-lg">
                            {scene.notes}
                          </p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </CollapsibleContent>
              </Collapsible>
            </Card>
          ))}
        </div>

        {/* Download All Section */}
        <Card className="mt-8">
          <CardHeader>
            <CardTitle>Export Assets</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {scenes.map((scene) => (
                <Button
                  key={scene.id}
                  variant="outline"
                  className="h-auto py-4 flex flex-col items-center gap-2"
                  onClick={() => handleDownload(scene.video, `rockfu-scene-${scene.id}.mp4`)}
                >
                  <Film className="h-6 w-6" />
                  <span>Scene {scene.id}</span>
                  <span className="text-xs text-muted-foreground">{scene.title}</span>
                </Button>
              ))}
            </div>
            <p className="text-sm text-muted-foreground mt-4 text-center">
              Import these clips into your video editor and add the voiceover track to complete the commercial.
            </p>
          </CardContent>
        </Card>

        {/* Back to Home */}
        <div className="mt-8 text-center">
          <Button variant="ghost" asChild>
            <a href="/">← Back to Rock Fu</a>
          </Button>
        </div>
      </main>
    </div>
  );
}
