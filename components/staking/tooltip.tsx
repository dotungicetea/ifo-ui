import React from "react";
import ImageComponent from "../image-component";
import styles from "../../styles/modules/staking.module.scss";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import Tooltip, { TooltipProps, tooltipClasses } from "@mui/material/Tooltip";

const StakingTooltip = () => {
  const HtmlTooltip = styled(({ className, ...props }: TooltipProps) => (
    <Tooltip {...props} classes={{ popper: className }} />
  ))(({ theme }) => ({
    [`& .${tooltipClasses.tooltip}`]: {
      backgroundColor: "#C5D2D5",
      color: "#000000",
      maxWidth: 520,
    },
  }));

  return (
    <HtmlTooltip
      title={
        <React.Fragment>
            <ul className={styles.listTooltip}>
                <li>IFO point, which is used to determine your rewards, is the sum of your loyalty and task points.</li>
                <li>You receive 1 point for each $GAFI staked. Total stake points are the loyalty points.</li>
                <li>Task point is the point you earn by completing the project tasks.</li>
            </ul>
        </React.Fragment>
      }
      placement="bottom-start"
    >
      <Button style={{minWidth: '45px', background: 'unset'}}>
        <ImageComponent
          src="/images/staking/tooltip.svg"
          className={styles.tooltip}
        />
      </Button>
    </HtmlTooltip>
  );
};

export default StakingTooltip;
