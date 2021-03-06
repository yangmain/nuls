package io.nuls.consensus.poc.rpc.model;

/**
 * @author Niels
 */
public class RandomSeedDTO {

    private String seed;

    private String algorithm;
    private int count;

    public String getSeed() {
        return seed;
    }

    public void setSeed(String seed) {
        this.seed = seed;
    }

    public String getAlgorithm() {
        return algorithm;
    }

    public void setAlgorithm(String algorithm) {
        this.algorithm = algorithm;
    }

    public void setCount(int count) {
        this.count = count;
    }

    public int getCount() {
        return count;
    }
}
