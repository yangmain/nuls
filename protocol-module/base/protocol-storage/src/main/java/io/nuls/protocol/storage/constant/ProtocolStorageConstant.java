/*
 * MIT License
 *
 * Copyright (c) 2017-2019 nuls.io
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */

package io.nuls.protocol.storage.constant;

import io.nuls.core.tools.crypto.Hex;
import io.nuls.core.tools.str.StringUtils;

/**
 * 协议模块存储功能相关常量集合
 * The protocol module stores a collection of related constants.
 *
 * @author: Niels Wang
 */
public interface ProtocolStorageConstant {
    /**
     * 区块头高度索引表名称
     * Block header height index table.
     */
    String DB_NAME_BLOCK_HEADER_INDEX = "block_header_index";

    /**
     * 区块头表名称
     * Block header table name.
     */
    String DB_NAME_BLOCK_HEADER = "block_header";

    /**
     * 数据库中存储的最新区块hash的索引值
     * The index value of the latest block hash stored in the database.
     */
    String BEST_BLOCK_HASH_INDEX = "best_block_hash_index";
    /**
     * 主网协议版本号存储表名称
     */
    String NULS_VERSION_AREA = "nuls_version_area";
    /**
     * 版本升级存储数据表名称
     */
    String NULS_PROTOCOL_AREA = "nuls_protocol_area";
    /**
     * 版本升级临时表存储数据表名称
     */
    String PROTOCOL_TEMP_AREA = "protocol_temp_area";

    String BLOCK_PROTOCOL_AREA = "block_protocol_area";

    String BLOCK_TEMP_PROTOCOL_AREA = "block_temp_protocol_area";

    String BLOCK_PROTOCOL_INDEX = "block_protocol_index";

    String BLOCK_TEMP_PROTOCOL_INDEX = "block_temp_protocol_index";

    String CONSENSUS_VERSION_AREA = "consensus_version_area";

    String BLOCK_PROTOCOL_HEIGHT = "block_protocol_height";

    String NULS_PROTOCOL_INFO_AREA = "nuls_protocol_info_area";

    String NULS_PROTOCOL_TEMP_INFO_AREA = "nuls_protocol_temp_info_area";
    /**
     * 存储当前主网运行中的版本数据key
     */
    byte[] MAIN_VERSION_KEY = StringUtils.bytes("mainVersion");

    /**
     * 存储当前主网运行中的版本数据key
     */
    byte[] CHANGE_HASH_HEIGHT_KEY = StringUtils.bytes("changeHashHeight");
}
