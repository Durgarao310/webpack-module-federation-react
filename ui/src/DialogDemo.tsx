import React, { useState } from 'react';
import { Dialog, Button } from './components';

const DialogDemo: React.FC = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const openDialog = () => setIsDialogOpen(true);
  const closeDialog = () => setIsDialogOpen(false);

  return (
    <div>
      <Button onClick={openDialog}>Open Dialog</Button>
      <Dialog
        isOpen={isDialogOpen}
        onClose={closeDialog}
        header={<h2>Dialog Title</h2>}
        footer={
          <>
            <Button onClick={closeDialog} variant="outlined">
              Cancel
            </Button>
            <Button onClick={closeDialog}>Confirm</Button>
          </>
        }
      >
        <p>
          This is the body of the dialog. It can contain any content you want.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne
          merninisti licere mihi ista probare, quae sunt a te dicta? Refert
          tamen, quo modo. Duo Reges: constructio interrete. Quae diligentissime
          contra Aristonem dicuntur a Chryippo. An hoc usque quaque, aliter in
          alio? Quod equidem non arbitror, id autem sequimur.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne
          merninisti licere mihi ista probare, quae sunt a te dicta? Refert
          tamen, quo modo. Duo Reges: constructio interrete. Quae diligentissime
          contra Aristonem dicuntur a Chryippo. An hoc usque quaque, aliter in
          alio? Quod equidem non arbitror, id autem sequimur.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne
          merninisti licere mihi ista probare, quae sunt a te dicta? Refert
          tamen, quo modo. Duo Reges: constructio interrete. Quae diligentissime
          contra Aristonem dicuntur a Chryippo. An hoc usque quaque, aliter in
          alio? Quod equidem non arbitror, id autem sequimur.
        </p>
      </Dialog>
    </div>
  );
};

export default DialogDemo;
