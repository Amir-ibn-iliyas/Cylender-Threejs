import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Cylender from "./Cylender";
// import "./app.css"
import { Bloom, EffectComposer } from "@react-three/postprocessing";
const App = () => {
  return (
    <>
      <div className=" w-full h-full lg:flex-row flex  flex-col pt-8 px-2  lg:p-8 bg-black">
        <div className="lg:w-1/2 w-full h-1/2 lg:h-full flex flex-col items-center justify-center gap-1 lg:gap-10">
          <h1 className=" text-white text-sm lg:text-4xl font-bold self-center">
            Tutorial Of React Three Fiber <br  /> (CylinderGeometry)
          </h1>
          <p className=" text-white text-sm lg:text-lg flex flex-col gap-1 lg:gap-6">
            
            <span className="font-bold text-white text-sm lg:text-lg">
              CylinderGeometry(radiusTop : Float, radiusBottom : Float, height :
              Float, radialSegments : Integer, heightSegments : Integer,
              openEnded : Boolean, thetaStart : Float, thetaLength : Float)
            </span>
            <ul className="flex flex-col text-sm  lg:gap-3">
              <li>radiusTop — Radius of the cylinder at the top. Default is 1.</li>
              <li>radiusBottom — Radius of the cylinder at the bottom. Default is 1.</li>
              <li>height — Height of the cylinder. Default is 1.</li>
              <li>radialSegments — Number of segmented faces around the circumference of the cylinder. Default is 32</li>
              <li>heightSegments — Number of rows of faces along the height of the cylinder. Default is 1.</li>
              <li>openEnded — A Boolean indicating whether the ends of the cylinder are open or capped. Default is false, meaning capped.</li>
              <li>thetaStart — Start angle for first segment, default = 0 (three o'clock position).</li>
              <li>thetaLength — The central angle, often called theta, of the circular sector. The default is 2*Pi, which makes for a complete cylinder.</li>
            </ul>
          </p>
        </div>

        <div className=" lg:w-1/2 w-full flex items-center justify-center lg:h-full h-1/2 ">
          <Canvas  camera={{ fov: 50 }} >
            {/* <OrbitControls/> */}
            <ambientLight />
            <Cylender />
            <EffectComposer>
              <Bloom
                intensity={10} // Adjust the strength of the bloom
                luminanceThreshold={6} // Bloom only brighter parts of the scene
                luminanceSmoothing={3} // Smooth transition for softer bloom edges
                radius={0.7} // Increase bloom size slightly
                mipBlur={true} // Enable additional blur for smoother results
              />
            </EffectComposer>
          </Canvas>
        </div>
      </div>
    </>
  );
};

export default App;
