
import React, { useState, Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { Loader } from '@react-three/drei';
import Scene from './components/Scene';
import UIOverlay from './components/UIOverlay';
import HandController from './components/HandController';
import { GreetingData, TreeState, TreeShape, HandGesture } from './types';

const App: React.FC = () => {
  const [greeting, setGreeting] = useState<GreetingData | null>(null);
  const [isGenerating, setIsGenerating] = useState<boolean>(false);
  const [treeState, setTreeState] = useState<TreeState>(TreeState.ASSEMBLED);
  const [treeShape, setTreeShape] = useState<TreeShape>(TreeShape.TREE);
  
  // Interaction States
  const [rotationOffset, setRotationOffset] = useState(0);
  const [isZoomed, setIsZoomed] = useState(false);
  const [currentGesture, setCurrentGesture] = useState<HandGesture>(HandGesture.NONE);

  return (
    <div className="relative w-full h-full bg-[#00100a]">
      <Canvas
        shadows
        dpr={[1, 2]}
        camera={{ position: [0, 4, 20], fov: 35 }}
        gl={{ 
          antialias: false, 
          stencil: false, 
          alpha: false,
          powerPreference: "high-performance"
        }}
      >
        <Suspense fallback={null}>
          <Scene 
            treeState={treeState} 
            treeShape={treeShape}
            rotationOffset={rotationOffset}
            isZoomed={isZoomed}
          />
        </Suspense>
      </Canvas>
      
      <Loader 
        containerStyles={{ backgroundColor: '#022e1f' }}
        innerStyles={{ width: '200px', backgroundColor: '#053d2e' }}
        barStyles={{ backgroundColor: '#d4af37' }}
        dataStyles={{ fontFamily: 'Cinzel', color: '#d4af37' }}
      />

      <UIOverlay 
        greeting={greeting} 
        setGreeting={setGreeting}
        isGenerating={isGenerating}
        setIsGenerating={setIsGenerating}
        treeState={treeState}
        setTreeState={setTreeState}
        treeShape={treeShape}
        setTreeShape={setTreeShape}
        currentGesture={currentGesture}
      />

      <HandController 
        setTreeState={setTreeState}
        setRotationOffset={setRotationOffset}
        setIsZoomed={setIsZoomed}
        setGesture={setCurrentGesture}
      />
    </div>
  );
};

export default App;
