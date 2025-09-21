import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  TrendingUp, 
  Brain, 
  Zap, 
  Heart, 
  Moon, 
  Sparkles,
  ArrowUpRight,
  Target
} from "lucide-react";

const HealthInsights = () => {
  const insights = [
    {
      title: "Cycle Pattern Analysis",
      description: "Your cycle has been consistently 28 days with 95% accuracy",
      trend: "+2% accuracy this month",
      icon: TrendingUp,
      color: "text-primary"
    },
    {
      title: "Mood & Energy Correlation",
      description: "Peak energy detected during days 8-14 of your cycle",
      trend: "Best productivity window",
      icon: Zap,
      color: "text-accent"
    },
    {
      title: "Sleep Quality Impact",
      description: "7+ hours sleep improves PMS symptoms by 40%",
      trend: "Optimal: 8.2 hours",
      icon: Moon,
      color: "text-secondary"
    },
    {
      title: "Wellness Score",
      description: "Your overall reproductive health is excellent",
      trend: "87/100 this cycle",
      icon: Heart,
      color: "text-primary"
    }
  ];

  const predictions = [
    {
      event: "Next Period",
      date: "March 15, 2024",
      confidence: "96%",
      days: "in 16 days"
    },
    {
      event: "Ovulation",
      date: "March 1, 2024",
      confidence: "94%",
      days: "in 2 days"
    },
    {
      event: "Fertile Window",
      date: "Feb 28 - Mar 4",
      confidence: "92%",
      days: "starts tomorrow"
    }
  ];

  return (
    <section id="insights" className="py-20">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-gradient">Intelligent Insights</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            AI-powered personalized insights that understand your unique patterns and rhythms
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {/* Main Insights */}
          <div className="lg:col-span-2 space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {insights.map((insight, index) => {
                const IconComponent = insight.icon;
                return (
                  <Card 
                    key={insight.title}
                    className="group hover:shadow-elegant transition-luxury hover:scale-105 animate-fade-up"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <CardHeader className="pb-3">
                      <div className="flex items-center justify-between">
                        <IconComponent className={`h-6 w-6 ${insight.color}`} />
                        <ArrowUpRight className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-smooth" />
                      </div>
                      <CardTitle className="text-lg group-hover:text-primary transition-smooth">
                        {insight.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="mb-3">
                        {insight.description}
                      </CardDescription>
                      <div className="flex items-center gap-2">
                        <div className={`w-2 h-2 rounded-full ${insight.color.replace('text-', 'bg-')}`} />
                        <span className="text-sm font-medium">{insight.trend}</span>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>

            {/* AI Recommendations */}
            <Card className="shadow-elegant">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Brain className="h-5 w-5 text-primary" />
                  AI Recommendations
                </CardTitle>
                <CardDescription>
                  Personalized suggestions based on your patterns
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex items-start gap-3 p-3 bg-primary/5 rounded-lg border border-primary/10">
                    <Target className="h-4 w-4 text-primary mt-0.5" />
                    <div>
                      <p className="text-sm font-medium mb-1">Optimize Iron Intake</p>
                      <p className="text-xs text-muted-foreground">
                        Consider increasing iron-rich foods 3 days before your period for better energy levels.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3 p-3 bg-secondary/5 rounded-lg border border-secondary/10">
                    <Sparkles className="h-4 w-4 text-secondary mt-0.5" />
                    <div>
                      <p className="text-sm font-medium mb-1">Schedule Important Tasks</p>
                      <p className="text-xs text-muted-foreground">
                        Your peak focus window is coming up on days 8-12. Perfect for big projects!
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3 p-3 bg-accent/5 rounded-lg border border-accent/10">
                    <Heart className="h-4 w-4 text-accent mt-0.5" />
                    <div>
                      <p className="text-sm font-medium mb-1">Self-Care Reminder</p>
                      <p className="text-xs text-muted-foreground">
                        Your PMS window starts in 10 days. Plan some extra self-care activities.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Predictions Panel */}
          <div className="space-y-6">
            <Card className="shadow-elegant">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Sparkles className="h-5 w-5 text-accent" />
                  Predictions
                </CardTitle>
                <CardDescription>
                  AI-powered forecasts based on your data
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {predictions.map((prediction, index) => (
                  <div 
                    key={prediction.event}
                    className="p-3 border border-border rounded-lg hover:bg-secondary/5 transition-smooth"
                  >
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="font-medium text-sm">{prediction.event}</h4>
                      <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full">
                        {prediction.confidence}
                      </span>
                    </div>
                    <p className="text-xs text-muted-foreground mb-1">{prediction.date}</p>
                    <p className="text-xs font-medium text-primary">{prediction.days}</p>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Wellness Score */}
            <Card className="shadow-elegant animate-glow">
              <CardHeader className="text-center">
                <CardTitle className="text-lg">Wellness Score</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <div className="text-4xl font-bold text-gradient mb-2">87</div>
                <p className="text-sm text-muted-foreground mb-4">Excellent health this cycle</p>
                <div className="w-full bg-secondary/20 rounded-full h-2">
                  <div className="bg-gradient-primary h-2 rounded-full" style={{ width: '87%' }} />
                </div>
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <div className="space-y-3">
              <Button className="w-full bg-gradient-primary hover:shadow-glow transition-luxury">
                <Brain className="h-4 w-4 mr-2" />
                Get Detailed Analysis
              </Button>
              <Button variant="outline" className="w-full">
                <Heart className="h-4 w-4 mr-2" />
                Health Report
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HealthInsights;