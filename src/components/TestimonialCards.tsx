'use client'
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

const sportTestimonials = [
    {
      quote:
        'This training program completely changed my game! The coaches are experts at pushing you to your limits and helping you achieve your full potential. I finally feel like the athlete I always knew I could be',
      name: "Sarah Rodriguez",
      title: 'Elite Track Athlete',
    },
    {
      quote:
        "Joining this league was the best decision I've made. It's not just about competition, it's about building a supportive community of teammates who share your passion for the sport. Plus, the coaches are fantastic!",
      name: 'David Young',
      title: 'Adult Basketball League Player',
    },
    {
      quote:
        "These facilities are top-notch! Having access to such a well-equipped gym has made a huge difference in my training. I love the variety of classes offered too, there's something for everyone.",
      name: 'Maria Lopez',
      title: 'Gym Member',
    },
    {
      quote:
        'This sports psychology program has been a game-changer for me. Learning how to manage my mental game has taken my performance to the next level. I highly recommend it to any athlete looking for that extra edge.',
      name: 'Mark Wilson',
      title: 'Professional Tennis Player',
    },
    {
      quote:
        'These youth sports programs are amazing! My kid has learned so much about teamwork, discipline, and sportsmanship. They are having a blast while developing valuable life skills.',
      name: 'Jennifer Brown',
      title: 'Parent of Youth Soccer Player',
    },
  ];

function SportTestimonials() {
  return (
    <div className="h-[40rem] w-full dark:bg-black dark:bg-grid-white/[0.2] relative flex flex-col items-center justify-center overflow-hidden">
        <h2 className="text-3xl font-bold text-center mb-8 z-10">Hear our War Cry: Voices of success</h2>
        <div className="flex justify-center w-full overflow-hidden px-4 sm:px-6 lg:px-8">
            <div className="w-full max-w-6xl">
            <InfiniteMovingCards
                items={sportTestimonials}
                direction="right"
                speed="slow"
      />
            </div>
        </div>
    </div>
  )
}

export default SportTestimonials