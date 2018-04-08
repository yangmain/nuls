package io.nuls.consensus.download;

import io.nuls.consensus.entity.BlockHashResponse;
import io.nuls.core.chain.entity.Block;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.concurrent.CompletableFuture;

/**
 * Created by ln on 2018/4/8.
 */
public class DownloadCacheHandler {

    private static Map<String, CompletableFuture<Block>> blockCacher = new HashMap<>();
    private static Map<String, CompletableFuture<BlockHashResponse>> blockHashesCacher = new HashMap<>();

    public static CompletableFuture<Block> addGetBlockRequest(String blockHash) {

        CompletableFuture<Block> future = new CompletableFuture<>();

        blockCacher.put(blockHash, future);

        return future;
    }

    public static void receiveBlock(Block block) {
        String hash = block.getHeader().getHash().getDigestHex();
        CompletableFuture<Block> future = blockCacher.get(hash);
        if(future != null) {
            future.complete(block);
            blockCacher.remove(hash);
        }
    }

    public static CompletableFuture<BlockHashResponse> addGetBlockHashesRequest(String requestHash) {

        CompletableFuture<BlockHashResponse> future = new CompletableFuture<>();

        blockHashesCacher.put(requestHash, future);

        return future;
    }

    public static void receiveHashes(BlockHashResponse hashes) {
        String key = hashes.getRequestEventHash().getDigestHex();
        CompletableFuture<BlockHashResponse> future = blockHashesCacher.get(key);
        if(future != null) {
            future.complete(hashes);
            blockHashesCacher.remove(key);
        }
    }
}
