import { JournalLayout } from "../layouts/JournalLayout";
import { NoteView, NothingSelectedView } from "../views";

export const JournalPage = () => {
  return (
    <JournalLayout>
      {/* <NothingSelectedView /> */}

      <NoteView />
    </JournalLayout>
  );
};
