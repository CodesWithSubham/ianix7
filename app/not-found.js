import Image from "next/image";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="h-[90vh] w-full flex items-center justify-center">
      <div className="w-full flex flex-col  items-center justify-center gap-8">
        <h1 className="text-5xl font-extrabold font-serif">URL Not found!</h1>

        <svg
          x="0"
          y="0"
          style={{ transformOrigin: "50px 50px 0" }}
          version="1.1"
          viewBox="0 0 100 100"
          className="drop-shadow-lg dark:drop-shadow-[0_35px_35px_rgba(0,100,0,0.25)] !w-3/5 max-w-[40vh] !h-3/5 max-h-[40vh] "
        >
          <g style={{ transformOrigin: "50px 50px 0" }}>
            <g
              style={{
                fill: "#000",
                transformOrigin: "50px 50px 0",
              }}
            >
              <g style={{ transformOrigin: "50px 50px 0" }}>
                <g style={{ fill: "#000" }}>
                  <style>{`@keyframes ld-swim-px{0%,50%,to{-webkit-transform:translate(0,0) rotate(0deg);transform:translate(0,0) rotate(0deg)}12.5%{-webkit-transform:translate(1px,-2px) rotate(3deg);transform:translate(1px,-2px) rotate(3deg)}25%{-webkit-transform:translate(0,-3px) rotate(6deg);transform:translate(0,-3px) rotate(6deg)}37.5%{-webkit-transform:translate(-1px,-2px) rotate(3deg);transform:translate(-1px,-2px) rotate(3deg)}62.5%{-webkit-transform:translate(1px,2px) rotate(-3deg);transform:translate(1px,2px) rotate(-3deg)}75%{-webkit-transform:translate(0,3px) rotate(-6deg);transform:translate(0,3px) rotate(-6deg)}87.5%{-webkit-transform:translate(-1px,2px) rotate(-3deg);transform:translate(-1px,2px) rotate(-3deg)}}@-webkit-keyframes ld-swim-px{0%,50%,to{-webkit-transform:translate(0,0) rotate(0deg);transform:translate(0,0) rotate(0deg)}12.5%{-webkit-transform:translate(1px,-2px) rotate(3deg);transform:translate(1px,-2px) rotate(3deg)}25%{-webkit-transform:translate(0,-3px) rotate(6deg);transform:translate(0,-3px) rotate(6deg)}37.5%{-webkit-transform:translate(-1px,-2px) rotate(3deg);transform:translate(-1px,-2px) rotate(3deg)}62.5%{-webkit-transform:translate(1px,2px) rotate(-3deg);transform:translate(1px,2px) rotate(-3deg)}75%{-webkit-transform:translate(0,3px) rotate(-6deg);transform:translate(0,3px) rotate(-6deg)}87.5%{-webkit-transform:translate(-1px,2px) rotate(-3deg);transform:translate(-1px,2px) rotate(-3deg)}}.st71{fill:none;stroke-width:5;stroke:#000;stroke-miterlimit:10}line{stroke-width:0}.ld.ld-swim-px{-webkit-animation:ld-swim-px 3s infinite linear;animation:ld-swim-px 3s infinite linear}`}</style>
                  <g
                    // style="transform-origin:50px 50px 0;animation-duration:1.3s;animation-delay:-1.21875s;animation-direction:normal"
                    style={{
                      transformOrigin: "50px 50px 0",
                      animationDuration: "1.3s",
                      animationDelay: "-1.21875s",
                      animationDirection: "normal",
                    }}
                  >
                    <circle
                      cx="50"
                      cy="50"
                      r="40"
                      class="ld ld-swim-px"
                      // style="stroke-width:6;stroke-miterlimit:10;fill:#fff;stroke:#000"
                      style={{
                        strokeWidth: 6,
                        strokeMiterlimit: 10,
                        fill: "#fff",
                        stroke: "#000",
                      }}
                    />
                  </g>
                  <g
                    // style="transform-origin:50px 50px 0;animation-duration:1.3s;animation-delay:-1.1375s;animation-direction:normal"
                    style={{
                      transformOrigin: "50px 50px 0",
                      animationDuration: "1.3s",
                      animationDelay: "-1.1375s",
                      animationDirection: "normal",
                    }}
                  >
                    <path
                      d="M31.866 71.591c2.57-7.556 9.709-13 18.134-13s15.564 5.444 18.134 13"
                      class="ld ld-swim-px"
                      // style="stroke-miterlimit:10;stroke-linecap:round;fill:none;stroke-width:5;stroke:#000"
                      style={{
                        strokeMiterlimit: 10,
                        strokeLinecap: "round",
                        fill: "none",
                        strokeWidth: 5,
                        stroke: "#000",
                      }}
                    />
                  </g>
                  <g
                    class="ld ld-swim-px"
                    // style="transform-origin:50px 50px 0;animation-duration:1.3s;animation-delay:-1.05625s;animation-direction:normal"
                    style={{
                      transformOrigin: "50px 50px 0",
                      animationDuration: "1.3s",
                      animationDelay: "-1.05625s",
                      animationDirection: "normal",
                    }}
                  >
                    <path
                      stroke="#000"
                      d="m27.5 32.409 12 12"
                      class="st71"
                      // style="stroke:#000"
                      style={{ stroke: "#000" }}
                    />
                  </g>
                  <g
                    class="ld ld-swim-px"
                    // style="transform-origin:50px 50px 0;animation-duration:1.3s;animation-delay:-.975s;animation-direction:normal"
                    style={{
                      transformOrigin: "50px 50px 0",
                      animationDuration: "1.3s",
                      animationDelay: "-.975s",
                      animationDirection: "normal",
                    }}
                  >
                    <path
                      stroke="#000"
                      d="m27.5 44.409 12-12"
                      class="st71"
                      // style="stroke:#000"
                      style={{ stroke: "#000" }}
                    />
                  </g>
                  <g
                    class="ld ld-swim-px"
                    // style="transform-origin:50px 50px 0;animation-duration:1.3s;animation-delay:-.89375s;animation-direction:normal"
                    style={{
                      transformOrigin: "50px 50px 0",
                      animationDuration: "1.3s",
                      animationDelay: "-.89375s",
                      animationDirection: "normal",
                    }}
                  >
                    <path
                      stroke="#000"
                      d="m60.5 32.409 12 12"
                      class="st71"
                      // style="stroke:#000"
                      style={{ stroke: "#000" }}
                    />
                  </g>
                  <g
                    class="ld ld-swim-px"
                    // style="transform-origin:50px 50px 0;animation-duration:1.3s;animation-delay:-.8125s;animation-direction:normal"
                    style={{
                      transformOrigin: "50px 50px 0",
                      animationDuration: "1.3s",
                      animationDelay: "-.8125s",
                      animationDirection: "normal",
                    }}
                  >
                    <path
                      stroke="#000"
                      d="m60.5 44.409 12-12"
                      class="st71"
                      // style={"stroke:#000"}
                      style={{ stroke: "#000" }}
                    />
                  </g>
                </g>
              </g>
            </g>
          </g>
        </svg>
        <p class="mt-1">The URL you were looking for could not be found</p>
        <Link href="/" className="font-semibold mt-2 px-3 py-2 rounded-full bg-blue-500 hover:bg-blue-600 dark:bg-blue-600 dark:hover:bg-blue-800">
          Go back to Home
        </Link>
      </div>
    </div>
  );
}
