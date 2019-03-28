import React, { useState } from "react";
import "./overlay.scss";
import Square from "./common/Square/Square";
import Circle from "./common/Circle/Circle";
import Text from "./common/Text/Text";
import Image from "./common/Image/Image";
import ImageGallery from "./common/ImageGallery/ImageGallery";
import Button from "./common/Button/Button";
import Dialog from "./common/Dialog/Dialog";
import dummyData from "./dummyData.json";

const Overlay = () => {
  const [tagColor, setTagColor] = useState("#000000");
  const [isOverlayOpen, setOverlayOpen] = useState(false);

  const openOverlay = () => setOverlayOpen(true);

  const action = action => {
    if (action && action.type === "clickThrough") {
      window.open(action.value, "_blank");
    } else if (action && action.type === "closeOverlay") {
      setOverlayOpen(false);
    }
  };

  let children = [];

  for (let i = 0; i < dummyData.overlayWidgets.length; i++) {
    const widget = dummyData.overlayWidgets[i];

    if (widget.type === "square") {
      children.push(
        <Square
          key={i}
          top={widget.settings.top}
          left={widget.settings.left}
          width={widget.settings.width}
          height={widget.settings.height}
          backgroundColor={widget.settings.backgroundColor}
          onClick={() => action(widget.settings.action)}
        />
      );
    } else if (widget.type === "circle") {
      children.push(
        <Circle
          key={i}
          top={widget.settings.top}
          left={widget.settings.left}
          width={widget.settings.width}
          height={widget.settings.height}
          backgroundColor={widget.settings.backgroundColor}
          onClick={() => action(widget.settings.action)}
        />
      );
    } else if (widget.type === "image") {
      children.push(
        <Image
          key={i}
          top={widget.settings.top}
          left={widget.settings.left}
          width={widget.settings.width}
          height={widget.settings.height}
          path={widget.settings.path}
          onClick={() => action(widget.settings.action)}
        />
      );
    } else if (widget.type === "gallery") {
      children.push(
        <ImageGallery
          key={i}
          top={widget.settings.top}
          left={widget.settings.left}
          width={widget.settings.width}
          height={widget.settings.height}
          images={widget.settings.images}
          autoPlay={widget.settings.autoPlay}
          navigation={widget.settings.navigation}
          thumbnail={widget.settings.thumbnail}
        />
      );
    } else if (widget.type === "text") {
      children.push(
        <Text
          key={i}
          top={widget.settings.top}
          left={widget.settings.left}
          text={widget.settings.text}
          font={widget.settings.font}
          fontSize={widget.settings.fontSize}
          bold={widget.settings.isBold ? "bold" : ""}
          italic={widget.settings.isItalic ? "italic" : ""}
          underline={widget.settings.isUnderlined ? "underline" : ""}
          width={widget.settings.width}
          height={widget.settings.height}
          color={widget.settings.color}
          backgroundColor={widget.settings.backgroundColor}
          align={widget.settings.align}
        />
      );
    } else if (widget.type === "button") {
      children.push(
        <Button
          key={i}
          text={widget.settings.text}
          top={widget.settings.top}
          left={widget.settings.left}
          width={widget.settings.width}
          height={widget.settings.height}
          font={widget.settings.font}
          fontSize={widget.settings.fontSize}
          bold={widget.settings.isBold ? "bold" : ""}
          italic={widget.settings.isItalic ? "italic" : ""}
          underline={widget.settings.isUnderlined ? "underline" : ""}
          color={widget.settings.color}
          backgroundColor={widget.settings.backgroundColor}
          align={widget.settings.align}
          radius={widget.settings.radius}
          onClick={() => action(widget.settings.action)}
        />
      );
    }
  }

  return (
    <>
      <div className="overlayContainer">
        {isOverlayOpen && (
          <Dialog
            onClose={() => {
              setOverlayOpen(false);
              window.player.play();
              window.player.controlBar.show();
              const tag = document.querySelector(".tag");
              tag.classList.remove("hidden");
            }}
          >
            {children}
          </Dialog>
        )}

        <button onClick={() => openOverlay()}>Open Overlay</button>

        <div
          onClick={() => {
            window.player.pause();
            window.player.controlBar.hide();
            const tag = document.querySelector(".tag");
            tag.classList.add("hidden");
            openOverlay();
          }}
          onMouseEnter={() => setTagColor("#00ACD8")}
          onMouseLeave={() => setTagColor("#000000")}
          className="tag static-tag static-3 tag-type-0 hotspot-animation"
          style={{
            width: "16.5256%",
            height: "21.0145%",
            position: "absolute",
            display: "block",
            visibility: "visible",
            cursor: "pointer"
          }}
        >
          <div
            className="tag-inner-box"
            style={{ width: "100%", height: "100%" }}
          >
            <div
              className="outer-circle"
              style={{
                left: "50%",
                top: "50%",
                width: "30px",
                height: "30px",
                position: "absolute",
                marginLeft: "-20px",
                marginTop: "-15px",
                transition: "all .3s"
              }}
            >
              <svg
                height="100%"
                version="1.1"
                width="100%"
                viewBox="0 0 30 30"
                preserveAspectRatio="xMinYMin"
                style={{ overflow: "hidden", position: "relative" }}
              >
                <defs style={{ WebkitTapHighlightColor: "#0000" }} />
                <circle
                  cx="15"
                  cy="15"
                  r="15"
                  fill={tagColor}
                  stroke="none"
                  style={{ WebkitTapHighlightColor: "#0000" }}
                />
                <path
                  fill="none"
                  stroke="#ffffff"
                  d="M15,7.5L15,22.5M7.5,15L22.5,15"
                  strokeWidth="3"
                  strokeLinecap="round"
                  style={{
                    WebkitTapHighlightColor: "#0000",
                    strokeLinecap: "round"
                  }}
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Overlay;
