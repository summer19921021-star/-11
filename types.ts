
export interface GreetingData {
  recipient: string;
  message: string;
}

export enum TreeState {
  SCATTERED = 'SCATTERED',
  ASSEMBLED = 'ASSEMBLED',
}

export enum TreeShape {
  TREE = 'TREE',
  HEART = 'HEART',
  SPHERE = 'SPHERE',
}

export enum HandGesture {
  NONE = 'NONE',
  OPEN = 'OPEN',     // Scatter
  FIST = 'FIST',     // Assemble
  PINCH = 'PINCH',   // Zoom Photo
  POINT = 'POINT',   // Rotate (using x movement)
}

export interface SceneProps {
  treeState: TreeState;
  treeShape: TreeShape;
  rotationOffset: number;
  isZoomed: boolean;
}

export interface TreeConfig {
  ornamentColor: string;
  lightsIntensity: number;
}