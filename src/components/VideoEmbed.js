/**
 * VideoEmbed
 * Construction / Infrastructure YouTube Embed
 */

import siteConfig from "../data/siteConfig";

export default function VideoEmbed({ id, title, description }) {
  const src = `https://www.youtube-nocookie.com/embed/${id}?rel=0&modestbranding=1&iv_load_policy=3`;

  return (
    <div className="group relative w-full">
      {/* Decorative Corners */}
      <div
        className="absolute -top-4 -left-4 w-8 h-8 border-l-2 border-t-2 border-orange-300/40 rounded-tl-lg"
        aria-hidden="true"
      />
      <div
        className="absolute -bottom-4 -right-4 w-8 h-8 border-r-2 border-b-2 border-orange-300/40 rounded-br-lg"
        aria-hidden="true"
      />

      {/* Video Container */}
      <div
        className="
          relative pb-[56.25%] h-0 overflow-hidden rounded-2xl
          bg-gradient-to-br from-gray-100 to-gray-200
          shadow-xl
          border border-gray-200
          transition-all duration-500 ease-out
          group-hover:shadow-2xl group-hover:border-orange-300
        "
      >
        {/* YouTube Iframe */}
        <iframe
          title={title || "Company Project Video"}
          src={src}
          loading="lazy"
          className="absolute inset-0 w-full h-full z-10"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        />

        {/* Play Overlay */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="relative">
            <div className="absolute inset-0 animate-ping rounded-full bg-orange-400/30 w-20 h-20"></div>

            <div
              className="
                relative w-16 h-16 rounded-full
                bg-gradient-to-r from-orange-600 to-amber-600
                flex items-center justify-center
                shadow-2xl
                transition-all duration-500
                group-hover:scale-110
              "
            >
              <svg
                className="w-7 h-7 text-white ml-1"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
          </div>
        </div>

        {/* Loading Placeholder */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center z-0">
          <div className="text-center p-8">
            <div className="w-16 h-16 rounded-full bg-orange-200 animate-pulse mx-auto mb-4"></div>
            <div className="text-gray-700 font-medium">
              Loading Project Video...
            </div>
          </div>
        </div>
      </div>

      {/* Video Information */}
      {(title || description) && (
        <div className="mt-6 p-6 bg-gray-50 rounded-xl border border-gray-200">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-full bg-orange-100 flex items-center justify-center flex-shrink-0">
              🎥
            </div>

            <div className="flex-1">
              {title && (
                <h4 className="text-xl font-bold text-gray-900 mb-2">
                  {title}
                </h4>
              )}

              {description && (
                <p className="text-gray-600 leading-relaxed">
                  {description}
                </p>
              )}

              {/* Tags */}
              <div className="mt-4 flex items-center gap-4 text-sm text-gray-500">
                <span>Petrol Pump Construction</span>
                <span>Fuel Infrastructure Project</span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Company Notice */}
      <div className="mt-4 text-sm text-gray-500">
        <p>
          © {siteConfig.companyName}. All project videos showcase completed
          works executed in compliance with safety and infrastructure standards.
        </p>
      </div>
    </div>
  );
}