import { Room } from "./Room";
import { CollaborativeApp } from "./CollaborativeApp";

export default function Page() {
  return (
    <div>
      <h3>Liveblocks</h3>
      <Room>
        <CollaborativeApp />
      </Room>
    </div>
  );
}
