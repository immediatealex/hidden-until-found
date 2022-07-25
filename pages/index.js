import React from 'react';

export default function Home() {
  const [open, setOpen] = React.useState(false);
  const wrapperRef = React.useRef(null);

  const setWrapperRef = (el) => {
    el?.style?.setProperty('display', 'block', 'important');
    wrapperRef.current = el;
  };

  React.useEffect(() => {
    const handleBeforeMatch = () => setOpen((prev) => !prev);
    wrapperRef.current.addEventListener('beforematch', handleBeforeMatch);

    return () => {
      wrapperRef.current.removeEventListener('beforematch', handleBeforeMatch);
    };
  }, []);

  React.useEffect(() => {
    if (open) {
      wrapperRef.current.removeAttribute('hidden');
    } else {
      wrapperRef.current.setAttribute('hidden', 'until-found');
    }
  }, [open]);

  return (
    <div className={`section ${open ? '' : 'collapsed'}`}>
      <h2 className="title" onClick={() => setOpen(!open)}>
        Introduction
      </h2>

      <hidden-until-found-wrapper
        className={`details ${open ? 'expanded' : ''}`}
        hidden="until-found"
        ref={setWrapperRef}
      >
        <div>
          Green tea ginger lemongrass agave green tea guacamole summer fruit salad fruit smash
          pumpkin orange zesty tofu pad thai roasted butternut squash blueberry chia seed jam green
          papaya salad.
        </div>
      </hidden-until-found-wrapper>
    </div>
  );
}
