import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar as CalendarIcon, Plus, Heart, Sparkles, Moon } from "lucide-react";

const CycleCalendar = () => {
  // Mock data for demonstration
  const currentDate = new Date();
  const currentMonth = currentDate.getMonth();
  const currentYear = currentDate.getFullYear();
  const today = currentDate.getDate();

  // Generate calendar days
  const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
  const firstDayOfMonth = new Date(currentYear, currentMonth, 1).getDay();
  const days = [];

  // Add empty cells for days before the first day of the month
  for (let i = 0; i < firstDayOfMonth; i++) {
    days.push(null);
  }

  // Add days of the month
  for (let day = 1; day <= daysInMonth; day++) {
    days.push(day);
  }

  const getDayType = (day: number | null) => {
    if (!day) return '';
    
    // Mock cycle data - in real app this would come from database
    const periodDays = [5, 6, 7, 8, 9]; // Example period days
    const ovulationDay = 18; // Example ovulation day
    const fertileDays = [16, 17, 18, 19, 20]; // Example fertile window
    
    if (periodDays.includes(day)) return 'period';
    if (day === ovulationDay) return 'ovulation';
    if (fertileDays.includes(day)) return 'fertile';
    return '';
  };

  const months = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

  const weekDays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  return (
    <section id="calendar" className="py-20 bg-secondary/10">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Your <span className="text-gradient">Cycle Calendar</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Track your rhythm with elegance and precision. Understanding your body has never been this beautiful.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Calendar */}
          <div className="lg:col-span-2">
            <Card className="shadow-elegant hover:shadow-glow transition-luxury">
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle className="text-2xl flex items-center gap-2">
                      <CalendarIcon className="h-6 w-6 text-primary" />
                      {months[currentMonth]} {currentYear}
                    </CardTitle>
                    <CardDescription>Your intelligent cycle tracking</CardDescription>
                  </div>
                  <Button size="sm" className="bg-gradient-primary hover:shadow-glow transition-luxury text-primary-foreground">
                    <Plus className="h-4 w-4 mr-2" />
                    Log Today
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                {/* Week days header */}
                <div className="grid grid-cols-7 gap-2 mb-4">
                  {weekDays.map((day) => (
                    <div key={day} className="text-center text-sm font-medium text-muted-foreground py-2">
                      {day}
                    </div>
                  ))}
                </div>

                {/* Calendar grid */}
                <div className="grid grid-cols-7 gap-2">
                  {days.map((day, index) => {
                    const dayType = getDayType(day);
                    const isToday = day === today;
                    
                    return (
                      <div
                        key={index}
                        className={`cycle-day ${dayType} ${isToday ? 'today' : ''} ${
                          !day ? 'invisible' : 'hover:scale-110'
                        }`}
                      >
                        {day}
                      </div>
                    );
                  })}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Side Panel */}
          <div className="space-y-6">
            {/* Cycle Status */}
            <Card className="shadow-elegant">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Heart className="h-5 w-5 text-primary" />
                  Cycle Status
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="text-center">
                  <div className="text-3xl font-bold text-gradient mb-2">Day 12</div>
                  <p className="text-muted-foreground">of your cycle</p>
                </div>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Next Period</span>
                    <span className="text-sm font-medium text-primary">in 16 days</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Fertile Window</span>
                    <span className="text-sm font-medium text-secondary">in 4 days</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Legend */}
            <Card className="shadow-elegant">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Sparkles className="h-5 w-5 text-accent" />
                  Legend
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-4 h-4 rounded-full bg-primary"></div>
                  <span className="text-sm">Menstrual Phase</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-4 h-4 rounded-full bg-accent"></div>
                  <span className="text-sm">Ovulation</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-4 h-4 rounded-full bg-secondary"></div>
                  <span className="text-sm">Fertile Window</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-4 h-4 rounded-full border-2 border-primary bg-transparent"></div>
                  <span className="text-sm">Today</span>
                </div>
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card className="shadow-elegant">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Moon className="h-5 w-5 text-secondary" />
                  Quick Log
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button variant="outline" className="w-full justify-start">
                  Period Started
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  Log Symptoms
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  Mood Check-in
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CycleCalendar;