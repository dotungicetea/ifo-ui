import React from 'react';
import { Stack } from "@mui/material";
import ImageComponent from '../image-component';
import styles from '../../styles/modules/staking.module.scss';

const BannerStaking = () => {
    return (
        <div className={styles.banner}>
            <h1>Lorem ipsum dolor sit amet</h1>
            <h2>Get loyalty point for staking tokens</h2>
            <Stack spacing={7} justifyContent='center' direction="row">
                <div className={styles.bannerContent}>
                    <Stack spacing={2} direction="row">
                        <ImageComponent className={styles.image} src="/images/staking/how_stake.svg" />
                        <div>
                            <h3>How to stake</h3>
                            <p>Learn more about how to stake here.</p>
                        </div>
                    </Stack>
                </div>
                <div className={styles.bannerContent}>
                    <Stack spacing={2} direction="row">
                        <ImageComponent className={styles.image} src="/images/staking/calculation.svg" />
                        <div>
                            <h3>Point Calculation</h3>
                            <p>Coming soon</p>
                        </div>
                    </Stack>
                </div>
            </Stack>
        </div>
    )
}

export default BannerStaking;