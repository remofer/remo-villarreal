import * as THREE from 'three';

export class Drawer {
  public texture: THREE.CanvasTexture;
  public aspect: number;

  private _ctx: CanvasRenderingContext2D;
  private readonly _margin = 130;
  private readonly _fontSize = 35;

  constructor(private _texts: string[]) {
    const dpr = window.devicePixelRatio || 1;

    const canvas = document.createElement('canvas');
    const width = 1024 * dpr;
    const height = width / 2.2;

    canvas.width = width;
    canvas.height = height;

    this._ctx = canvas.getContext('2d')!;
    this._ctx.scale(dpr, dpr);

    this.aspect = canvas.width / canvas.height;

    this.texture = new THREE.CanvasTexture(canvas);
    this.texture.minFilter = THREE.LinearFilter;
    this.texture.magFilter = THREE.LinearFilter;
    this.texture.anisotropy = 16;
    this.texture.needsUpdate = true;
  }

  draw = () => {
	const ctx = this._ctx;
	const { width, height } = ctx.canvas;
	const margin = this._margin;
	const fontSize = this._fontSize;
  
	ctx.clearRect(0, 0, width, height);
  
	ctx.textAlign = 'left';
	ctx.textBaseline = 'top';
	ctx.font = `bold ${fontSize}px 'Poppins'`;
	ctx.fillStyle = '#ffffff';

	this._texts.forEach((line, i) => {
  	ctx.fillText(line, margin, margin + i * (fontSize + 20));
	});
  };
  
}
