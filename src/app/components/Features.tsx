"use client"
import React from "react"
import ScrollStack, { ScrollStackItem } from "./ScrollStackItem"
import {
  Users,
  GraduationCap,
  Code2,
  FolderKanban,
  HeartHandshake,
} from "lucide-react"

const Features = () => {
  return (
    <ScrollStack className="bg-gradient-to-b from-white to-gray-50">
      {/* Card 1 */}
      <ScrollStackItem itemClassName="bg-indigo-500 text-white">
        <div className="flex flex-col items-start gap-6">
          <Users className="w-14 h-14 p-3 rounded-xl bg-white/20" />
          <div>
            <h2 className="text-3xl font-bold mb-3">Built for Devs</h2>
            <p className="text-lg opacity-90 mb-2">
              DevSpaces is made with developers in mind, not as an afterthought.
            </p>
            <p className="text-base opacity-75 mb-1">
              Connect with like-minded builders who understand the challenges you face daily.
            </p>
            <p className="text-base opacity-75">
              From open discussions to instant feedback, everything here is tailored for your growth.
            </p>
          </div>
        </div>
      </ScrollStackItem>

      {/* Card 2 */}
      <ScrollStackItem itemClassName="bg-white text-gray-900 border border-gray-200">
        <div className="flex flex-col items-start gap-6">
          <GraduationCap className="w-14 h-14 p-3 rounded-xl bg-indigo-100 text-indigo-600" />
          <div>
            <h2 className="text-3xl font-bold text-indigo-500 mb-3">
              Learn & Level Up
            </h2>
            <p className="text-lg text-gray-700 mb-2">
              Knowledge flows faster when shared by the people actually building.
            </p>
            <p className="text-base text-gray-600 mb-1">
              Explore tutorials, resources, and mentorship directly from your peers.
            </p>
            <p className="text-base text-gray-600">
              Whether you’re new to code or a seasoned pro, there’s always a way to sharpen your edge.
            </p>
          </div>
        </div>
      </ScrollStackItem>

      {/* Card 3 */}
      <ScrollStackItem itemClassName="bg-gradient-to-br from-indigo-600 to-indigo-400 text-white">
        <div className="flex flex-col items-start gap-6">
          <Code2 className="w-14 h-14 p-3 rounded-xl bg-white/20" />
          <div>
            <h2 className="text-3xl font-bold mb-3">Collaborate in Real Time</h2>
            <p className="text-lg opacity-90 mb-2">
              Some of the best ideas happen when developers build together.
            </p>
            <p className="text-base opacity-75 mb-1">
              Join hackathons, contribute to open-source, or pair up for coding jams.
            </p>
            <p className="text-base opacity-75">
              With instant collaboration tools, teamwork is faster and smoother than ever.
            </p>
          </div>
        </div>
      </ScrollStackItem>

      {/* Card 4 */}
      <ScrollStackItem itemClassName="bg-white text-gray-900 border border-gray-200">
        <div className="flex flex-col items-start gap-6">
          <FolderKanban className="w-14 h-14 p-3 rounded-xl bg-indigo-100 text-indigo-600" />
          <div>
            <h2 className="text-3xl font-bold text-indigo-500 mb-3">
              Showcase Your Work
            </h2>
            <p className="text-lg text-gray-700 mb-2">
              Your projects deserve more than a GitHub repo lost in the noise.
            </p>
            <p className="text-base text-gray-600 mb-1">
              Display your portfolio, side hustles, or startup ideas to the community.
            </p>
            <p className="text-base text-gray-600">
              Get recognition, attract opportunities, and let your work speak louder than words.
            </p>
          </div>
        </div>
      </ScrollStackItem>

      {/* Card 5 */}
      <ScrollStackItem itemClassName="bg-indigo-500 text-white">
        <div className="flex flex-col items-start gap-6">
          <HeartHandshake className="w-14 h-14 p-3 rounded-xl bg-white/20" />
          <div>
            <h2 className="text-3xl font-bold mb-3">A Community That Cares</h2>
            <p className="text-lg opacity-90 mb-2">
              Beyond the code, DevSpaces is built on people who want to see each other succeed.
            </p>
            <p className="text-base opacity-75 mb-1">
              Find peers to celebrate your wins, help through blockers, and share the grind.
            </p>
            <p className="text-base opacity-75">
              Together, we create not just better software, but a better culture of building.
            </p>
          </div>
        </div>
      </ScrollStackItem>
    </ScrollStack>
  )
}

export default Features
