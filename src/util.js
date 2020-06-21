export function checkUserMediaError() {
  if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
    return new Error(
      "Browser API navigator.mediaDevices.getUserMedia not available"
    )
  }
  return null
}

export function getMediaStreamConstraints(facingMode, frameRate) {
  return {
    audio: false,
    video: {
      facingMode,
      frameRate
    }
  }
}

export function getConfidentPoses(poses, minPoseConfidence, minPartConfidence) {
  return poses
    .filter(({ score }) => score > minPoseConfidence)
    .map(pose => ({
      ...pose,
      keypoints: pose.keypoints.filter(({ score }) => score > minPartConfidence)
    }))
}

export function drawKeypoints(ctx, keypoints) {
  keypoints.forEach(({ position }) => {
    const { x, y } = position
    ctx.beginPath()
    ctx.arc(x, y, 5, 0, 2 * Math.PI, false)
    ctx.fillStyle = "aqua"
    ctx.fill()
  })
}

export function drawSegment([ay, ax], [by, bx], color, scale) {
      this.ctx.beginPath();
      this.ctx.moveTo(ax * scale, ay * scale);
      this.ctx.lineTo(bx * scale, by * scale);
      this.ctx.lineWidth = 2;
      this.ctx.strokeStyle = color;
      this.ctx.stroke();
    }

export function drawSkeleton(ctx, keypoints) {
      const adjacentKeyPoints = await posenet.getAdjacentKeyPoints(
        keypoints,
        this.minConfidence
      );
      adjacentKeyPoints.forEach(keypoints => {
        this.drawSegment(
          this.toTuple(keypoints[0].position),
          this.toTuple(keypoints[1].position),
          "#FF0000",
          1
        );
      });
    }
