export type TrackData = Record<string, unknown>;

export function track(event: string, data: TrackData = {}): void {
  void event;
  void data;
}
