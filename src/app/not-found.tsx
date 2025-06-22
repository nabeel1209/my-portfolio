import Link from "next/link"
import { Home, ArrowLeft, Search, Code, User, FolderOpen } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Custom404() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh] px-6 text-center font-sora">
        {/* 404 Hero */}
        <div className="mb-8">
          <h1 className="text-8xl md:text-9xl font-bold bg-[linear-gradient(to_right,#7b57c1_10%,#f4eafd)] bg-clip-text text-transparent mb-4">
            404
          </h1>
          <div className="text-2xl md:text-3xl font-semibold text-gray-300 mb-4">Oops! Page not found</div>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Looks like you&apos;ve ventured into uncharted territory. Even the best developers encounter bugs sometimes!
            Let&apos;s get you back on track.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 mb-12">
          <Button
            asChild
            variant="outline"
            className="border-gray-600 text-slate-700 hover:bg-gray-800 hover:text-white px-8 py-3 rounded-lg font-medium transition-all duration-200"
          >
            <Link href="/" className="flex items-center space-x-2">
                <Home className="w-5 h-5" />
                <span>Back to Home</span>
            </Link>
          </Button>
        </div>

        {/* Fun Message */}
        <div className="p-4 bg-gray-800/30 rounded-lg border border-gray-700 max-w-md mx-auto">
          <p className="text-sm text-gray-400">
            <span className="text-blue-400 font-mono">console.log(</span>
            <span className="text-green-400">&quot;Don&apos;t worry, even NASA&apos;s code has bugs!&quot;</span>
            <span className="text-blue-400 font-mono">)</span>
          </p>
        </div>
      </div>
  )
}
