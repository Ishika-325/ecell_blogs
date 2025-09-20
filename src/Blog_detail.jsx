import React from "react";

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-[#0a0a2a] text-white px-6 md:px-20 py-10">
      {/* Breadcrumb */}
      <div className="text-sm text-gray-400 mb-4">
        Home / Blog / The High Cost of Victory: Olympic Economics
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Main Blog Content */}
        <div className="lg:col-span-3">
          {/* Image */}
          <div className="rounded-lg overflow-hidden mb-6">
            <img
              src="/olympic.jpg"
              alt="Olympics"
              className="w-full rounded-lg"
            />
            <p className="text-xs text-gray-400 mt-1">src: NBC News</p>
          </div>

          {/* Title */}
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            The High Cost of Victory: Olympic Economics
          </h1>

          {/* Content */}
          <div className="space-y-6 text-gray-200 leading-relaxed">
            <p>
              The Olympics are more than just a sports competition; they're a
              massive global spectacle that captures the world's attention every
              four years. We're all drawn to the incredible athletic feats, the
              inspiring stories of human triumph, and the spirit of unity that
              the Games embody. But behind the scenes, there's a different
              story. Hosting the Olympics is incredibly expensive. Cities spend
              billions building new stadiums, upgrading transportation, and
              ensuring security. While these projects can create jobs and
              improve infrastructure, the costs are often huge and taxpayers
              usually end up footing the bill.
            </p>

            <h2 className="text-2xl font-bold mt-8">
              So why do countries still want to host the Olympics if it is such
              a losing venture?
            </h2>
            <p>
              Beyond finances, the Olympics are a powerful platform for
              countries to show off their culture and achievements to the world.
              It's a chance to build bridges, promote peace, and inspire people.
              The Games can also leave a lasting positive impact on a city, with
              improved facilities and a boost to tourism. It is also a
              demonstration of a country's prowess to host an event on the
              grandest of scales. ...
            </p>

            <p>
              The Paris Olympics 2024 embrace the concept of “doing more with
              less” and are the first games to fully align with the Olympic
              Agenda 2020, which is the strategic roadmap to make the Olympics
              more sustainable, cost-effective, and aligned with the needs of
              host cities and communities. ...
            </p>

            <p>
              Imagine the excitement if India hosted the Olympics! It would be a
              huge opportunity to showcase our country's rich culture and
              diversity to the world. ...
            </p>

            <p>
              The games aren’t so different from the startup world which we are
              all familiar with. Both involve some of the most dedicated people
              who persevere and compete to be successful. Ultimately, the
              Olympics are a complex mix of sports, politics, economics, and
              culture. While the focus is on the athletes, the Games have a
              far-reaching impact on the world.
            </p>
          </div>
        </div>

        {/* Sidebar */}
        <div className="lg:col-span-1">
          <div className="bg-[#10103a] p-4 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold mb-3">Latest Article</h3>
            <div className="flex items-center gap-3 mb-6">
              <img
                src="/olympic.jpg"
                alt="thumbnail"
                className="w-12 h-12 rounded-md object-cover"
              />
              <div>
                <p className="text-sm font-medium">
                  The High Cost of Victory: Olympic Economics
                </p>
                <p className="text-xs text-gray-400">Aug 5, 2024</p>
              </div>
            </div>

            <h3 className="text-lg font-semibold mb-3">Tags</h3>
            <div className="flex flex-wrap gap-2">
              <span className="bg-blue-600 px-3 py-1 rounded-md text-xs">
                olympics
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
